! git clone --single-branch --branch gptq-4bit-32g-actorder_True https://huggingface.co/TheBloke/Spicyboros-7B-2.2-GPTQ

! pip3 uninstall -y transformers
! pip3 install git+https://github.com/huggingface/transformers.git
! pip3 install transformers>=4.32.0 optimum>=1.12.0
! pip3 install auto-gptq --extra-index-url https://huggingface.github.io/autogptq-index/whl/cu118/  # Use cu117 if on CUDA 11.7

! pip install accelerate

!pip install PyPDF2 pdf2image pytesseract

from PyPDF2 import PdfReader
from pdf2image import convert_from_path
import pytesseract

# PDF functions
def extract_text_from_text_pdf(pdf_path):
    pdf = PdfReader(pdf_path)
    text = ""
    for page_num, page in enumerate(pdf.pages):
        text += page.extract_text()
    return text

def extract_text_from_image_pdf(pdf_path):
    pages = convert_from_path(pdf_path)
    extracted_text = []
    for page_num, page_image in enumerate(pages):
        text = pytesseract.image_to_string(page_image)
        extracted_text.append(text)
    return extracted_text

from transformers import AutoModelForCausalLM, AutoTokenizer
import torch

def summarize_text(input_text, max_tokens=750, max_part_length=250):
    # Set the random seed for both PyTorch and the model
    # torch.manual_seed(seed)
    model_name_or_path = "TheBloke/Spicyboros-7B-2.2-GPTQ"

    model = AutoModelForCausalLM.from_pretrained(model_name_or_path,
                                                 device_map="auto",
                                                 trust_remote_code=False,
                                                 revision="main")

    tokenizer = AutoTokenizer.from_pretrained(model_name_or_path, use_fast=True)

    # Split the input text into multiple parts
    parts = [input_text[i:i+max_part_length] for i in range(0, len(input_text), max_part_length)]

    # Initialize the summary
    full_summary = ""

    for part in parts:
        # Generate a summary for each part
        prompt_template = f'''You are a helpful assistant that gives a long summary in layman language and shows output in bulletin format.
USER: Please provide a clear and straightforward detailed explanation of the text '{part}' in simple language.
Additionally, offer insights from the surrounding text or context that can assist users in understanding how service is meant to be used.
Ensure to highlight any potential pitfalls or attempts at deception related to the usage of service to help users avoid any misunderstandings or misuse
ASSISTANT:
    '''

        input_ids = tokenizer(prompt_template, return_tensors='pt').input_ids.cuda()

        # Set the random seed for generation
        # torch.random.manual_seed(seed)

        output = model.generate(inputs=input_ids, max_length=max_tokens, temperature=0.6, do_sample=True, top_p=0.95, top_k=40, repetition_penalty=1.1)

        summary = tokenizer.decode(output[0])
        full_summary += f"- {summary}\n"

    return full_summary

def main():
    # Input text provided by the user
    input_text = "/content/website-terms-and-conditions-format.pdf"

    # Summarize the input text using the summarize_text function with a specific seed
    full_summary = summarize_text(input_text)

    # Print the generated summary
    print("Summary:")
    print(full_summary)

if __name__ == "__main__":
    main()