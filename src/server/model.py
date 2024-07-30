# chat_script.py
import os
import sys
import groq
import io
from groq import Groq
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
os.environ['GROQ_API_KEY'] = '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'

client = Groq()
conversation_history = []

def generate_content(p):
    global conversation_history
    conversation_history.append({'role': 'user', 'content': p})
    res = client.chat.completions.create(
        messages = conversation_history,
        model = 'llama3-groq-70b-8192-tool-use-preview'
    )
    assistant_message = res.choices[0].message.content
    conversation_history.append({'role': 'assistant', 'content': assistant_message})
    return assistant_message

if _name_ == "_main_":
    user_input = sys.argv[1]
    response = generate_content(user_input)
    print(response)
