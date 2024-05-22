import requests

url = "http://127.0.0.1:8000/upload-pdf/"
file_path = "C:/Users/saura/Downloads/Artificial intelligence.pdf"

with open(file_path, "rb") as file:
    files = {"file": (file_path, file, "application/pdf")}
    response = requests.post(url, files=files)

print(response.json())
