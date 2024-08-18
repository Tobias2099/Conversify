import cohere

def generate(prompt, conversation_history, key):
    # Add the usrs  msg to the conversation history
        
    conversation_history.append(f"User: {prompt}")

    co = cohere.Client(key)
  
    # get response
    conversation_text = "\n".join(conversation_history)
    response = co.chat(
        message=conversation_text
    )

    # Add models response to conversation history
    conversation_history.append(f"AI: {response.text}")

    return response.text, conversation_history



conversation_history = []


# while True:
#     user_input = input("You: ")
#     if user_input.lower() in ['exit', 'quit']:
#         break

#     response, conversation_history = generate(user_input, conversation_history)
#     print(f"AI: {response}")