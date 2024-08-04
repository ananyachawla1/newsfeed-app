import os
import requests
import streamlit as st
from groq import Groq
from bs4 import BeautifulSoup

# Set up Groq API key
os.environ['GROQ_API_KEY'] = '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'

# Initialize Groq client
client = Groq()
conversation_history = []

def generate_content(p):
    prompt = p + """ Also give follow up questions at the end of your answer."""
    global conversation_history
    conversation_history.append({'role': 'user', 'content': prompt})
    res = client.chat.completions.create(
        messages=conversation_history,
        model='llama-3.1-8b-instant'
    )
    assistant_message = res.choices[0].message.content
    conversation_history.append({'role': 'assistant', 'content': assistant_message})
    return assistant_message

def generate_content_sum(p):
    prompt = p
    global conversation_history
    conversation_history.append({'role': 'user', 'content': prompt})
    res = client.chat.completions.create(
        messages=conversation_history,
        model='llama-3.1-8b-instant'
    )
    assistant_message = res.choices[0].message.content
    conversation_history.append({'role': 'assistant', 'content': assistant_message})
    return assistant_message

# Function to get finance news articles
def get_finance_news(api_key, query='India finance', page_size=9):
    url = f'https://newsapi.org/v2/everything?q={query}&pageSize={page_size}&apiKey={api_key}'
    response = requests.get(url)
    articles = response.json().get('articles', [])
    return articles

# Function to summarize an article
def summarize_article(content):
    prompt = f"Summarize the following article:\n\n{content}"
    summary = generate_content_sum(prompt)
    return summary

# Function to register a user
def register_user(username, password):
    users = st.session_state.get('users', {})
    if username in users:
        return False
    users[username] = password
    st.session_state['users'] = users
    return True

# Function to login a user
def login_user(username, password):
    users = st.session_state.get('users', {})
    return users.get(username) == password

# Login and Registration forms
def login():
    st.title("Login")
    username = st.text_input("Username")
    password = st.text_input("Password", type='password')
    if st.button("Login"):
        if login_user(username, password):
            st.session_state['logged_in'] = True
            st.session_state['username'] = username
        else:
            st.error("Invalid username or password")

def register():
    st.title("Register")
    username = st.text_input("Choose a Username")
    password = st.text_input("Choose a Password", type='password')
    if st.button("Register"):
        if register_user(username, password):
            st.success("Registration successful. Please login.")
        else:
            st.error("Username already exists")

# Function to scrape article content
def scrape_article(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')
    article_content = soup.find('article').get_text()
    return article_content

# Main app with authentication
def main_app():
    st.title("NiveshX - Your first step to becoming the next Finance Master!")
    st.write(f"Welcome, {st.session_state['username']}!")
    # st.write("You will be finding the best finance articles daily and our Master Blaster - NeeLlama, built on the latest Llama 3 LLM...")
    st.write('Discover daily finance articles and insights with NeeLlama, your AI companion for mastering investments.')
    st.write("""नीलामा के साथ वित्तीय लेख और अंतर्दृष्टि की खोज करें, आपके निवेश मास्टर बनने के लिए एआई साथी।""")
    st.write("""ਨੀਲਾਮਾ ਨਾਲ ਵਿੱਤੀ ਲੇਖ ਅਤੇ ਜਾਣਕਾਰੀਆਂ ਦੀ ਖੋਜ ਕਰੋ, ਤੁਹਾਡੇ ਨਿਵੇਸ਼ਾਂ ਦੇ ਮਾਸਟਰ ਬਣਨ ਲਈ ਏ.ਆਈ. ਸਾਥੀ।""")
    
    st.write("""Languages:- English, हिंदी, 
ਪੰਜਾਬੀ, বাংলা, français and many more....""")
    news_api_key = '043464d1958c4c1bb474eecbb8093e67'  
    articles = get_finance_news(news_api_key)
    st.subheader('Scroll Down for Accessing NeeLlama!')
    

    # Display finance news articles as cards with consistent size and spacing
    st.subheader("Finance News Articles")

    num_cols = 3
    col_width = 225  
    card_height = 500  
    horizontal_padding = 50  

    cols = st.columns(num_cols)

    for i, article in enumerate(articles):
        col = cols[i % num_cols]
        with col:
            with st.container():
                st.markdown(f"""
                <div style="
                    width: {col_width}px; 
                    height: {card_height}px; 
                    padding: 15px; 
                    margin: 10px {horizontal_padding}px 10px 0; 
                    border: 1px solid #ddd; 
                    border-radius: 8px; 
                    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); 
                    display: flex; 
                    flex-direction: column;
                    overflow: hidden;
                ">
                    <h3 style="font-size: 16px; margin-bottom: 10px;">{article['title']}</h3>
                    <p style="font-size: 12px; color: #555; margin-bottom: 10px;"><strong>Source:</strong> {article['source']['name']}</p>
                    {f'<img src="{article["urlToImage"]}" style="width: 100%; height: 150px; object-fit: cover; border-radius: 8px;" />' if article['urlToImage'] else ''}
                    <p style="font-size: 14px; margin: 10px 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">{summarize_article(article['description'])}</p>
                    <a href="{article['url']}" style="display: inline-block; padding: 8px 12px; margin-top: auto; background-color: #007bff; color: white; text-decoration: none; border-radius: 4px; text-align: center;" target="_self">Read more</a>
                </div>
                """, unsafe_allow_html=True)
    # Chatbot section
    if 'chat_history' not in st.session_state:
        st.session_state.chat_history = []

    if 'show_chatbot' not in st.session_state:
        st.session_state.show_chatbot = False

    # Button to toggle chatbot visibility
    if st.button("Financially Confused? Ask Me!", key='chat_button'):
        st.session_state.show_chatbot = not st.session_state.show_chatbot

    # Display chatbot in a popup-like expander
    if st.session_state.show_chatbot:
        with st.expander("Chat with NeeLlama", expanded=True):
            st.write("## NeeLlama")
            user_input = st.text_input("You: ", key="chat_input")

            if user_input:
                response = generate_content(user_input)
                st.session_state.chat_history.append({"user": user_input, "bot": response})
                user_input = ""

            # Display chat history
            for chat in reversed(st.session_state.chat_history):
                st.markdown(f"You: {chat['user']}")
                st.markdown(f"NeeLlama: {chat['bot']}")
                st.write('----')
    st.write('')
    st.write('')
    st.write('')
    st.write('')
    st.write('')
    st.subheader("For support contact: @FemForces at all socials")

# Main function to control the flow of the app
def main():
    if 'logged_in' not in st.session_state:
        st.session_state['logged_in'] = False

    if st.session_state['logged_in']:
        main_app()
    else:
        st.sidebar.title("Menu")
        choice = st.sidebar.selectbox("Choose an option", ["Login", "Register"])
        if choice == "Login":
            login()
        else:
            register()

if __name__ == "__main__":
    main()
