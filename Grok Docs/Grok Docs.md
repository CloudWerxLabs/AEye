# Source: https://docs.x.ai/docs

# Crawl Statistics

- **Source:** https://docs.x.ai/docs
- **Depth:** 2
- **Pages processed:** 1
- **Crawl method:** browser
- **Duration:** 1.84 seconds
- **Crawl completed:** 12/25/2024, 1:35:03 AM

# Source: https://docs.x.ai/docs

## URL: https://docs.x.ai/docs

## Title: Welcome to the xAI documentation

Welcome to the xAI documentation

Menu

[Getting Started](https://docs.x.ai/docs/overview)

[Overview](https://docs.x.ai/docs/overview)[Introduction](https://docs.x.ai/docs/introduction)[The Hitchhiker's Guide to Grok](https://docs.x.ai/docs/tutorial)[Models and Pricing](https://docs.x.ai/docs/models)[Usage, Tiers and Rate Limits](https://docs.x.ai/docs/usage-tiers-and-rate-limits)

[Guides](https://docs.x.ai/docs/guides/chat)

[Chat](https://docs.x.ai/docs/guides/chat)[Streaming Response](https://docs.x.ai/docs/guides/streaming-response)[Image Understanding](https://docs.x.ai/docs/guides/image-understanding)[Function Calling](https://docs.x.ai/docs/guides/function-calling)[Structured Outputs](https://docs.x.ai/docs/guides/structured-outputs)[Fingerprint](https://docs.x.ai/docs/guides/fingerprint)[Migration from Other Providers](https://docs.x.ai/docs/guides/migration)

[REST API Reference](https://docs.x.ai/docs/api-reference)

[Chat completions](https://docs.x.ai/docs/api-reference#chat-completions)[Completions (legacy)](https://docs.x.ai/docs/api-reference#completions-legacy)[Create embeddings](https://docs.x.ai/docs/api-reference#create-embeddings)[API Keys](https://docs.x.ai/docs/api-reference#api-key)[List models](https://docs.x.ai/docs/api-reference#list-models)[Get model](https://docs.x.ai/docs/api-reference#get-model)[List language models](https://docs.x.ai/docs/api-reference#list-language-models)[Get language model](https://docs.x.ai/docs/api-reference#get-language-model)[List embedding models](https://docs.x.ai/docs/api-reference#list-embedding-models)[Get embedding model](https://docs.x.ai/docs/api-reference#get-embedding-model)

[

xAI Official Community

](https://discord.gg/x-ai)[

Email xAI Support

](mailto:support@x.ai)

# [#](#whats-up-developers)What's up, Developers?

First time xAI API or Large Language Model API user? Go to the [Introduction](introduction) for a brief background on Grok and interacting with LLM through API.

* * *

## [#](#getting-started)Getting started

Ready to build? Go to our [Hitchiker's Guide to Grok](tutorial).

* * *

## [#](#quick-reference)Quick reference

[

#### API Console

Create an API key to access the API

](https://console.x.ai)[

#### Endpoints

See parameters for each endpoint

](https://docs.x.ai/docs/api-reference)[

#### Integrations

Use the xAI API in your application

](https://docs.x.ai/docs/guides/migration)

* * *

## [#](#featured-models)Featured Models

grok-2-1212

Our latest text model supporting structured outputs, with improved efficiency, speed and capabilities.

grok-2-vision-1212

Our latest image understanding model with increased context window that can process a wide variety of visual information, including documents, diagrams, charts, screenshots, and photographs.

For previous models that are available, visit [Models and Pricing](models). Actual availability might be different for you team. You can view models and pricing available to your team from the [xAI Console Models Page](https://console.x.ai/team/default/models).

* * *

## [#](#migrating-from-another-llm-provider)Migrating from another LLM provider?

With just two line changes to your code, you're on Grok! Our API endpoint is designed to be compatible with OpenAI and Anthropic SDKs except capabilities not offered by the SDK.

You might want to read our guide [Migration from Other Providers](guides/migration) for more information and caveats.

**OpenAI SDK**

python

```
from openai import OpenAI
    
client = OpenAI(
  api_key=XAI_API_KEY,
  base_url="https://api.x.ai/v1",
)
```

**Anthropic SDK**

python

```
from anthropic import Anthropic

client = Anthropic(
  api_key=XAI_API_KEY,
  base_url="https://api.x.ai",
)
```

Change the `model` in your request to one of the [models](models) on xAI and you're all set!

* * *

## [#](#questions-and-feedback)Questions and feedback

If you have any questions or feedback, feel free to email us at [support@x.ai](mailto:support@x.ai).

Happy Grokking! 😎
---

---


## URL: https://docs.x.ai/docs/overview

## Title: Welcome to the xAI documentation

Welcome to the xAI documentation

Menu

[Getting Started](https://docs.x.ai/docs/overview)

[Overview](https://docs.x.ai/docs/overview)[Introduction](https://docs.x.ai/docs/introduction)[The Hitchhiker's Guide to Grok](https://docs.x.ai/docs/tutorial)[Models and Pricing](https://docs.x.ai/docs/models)[Usage, Tiers and Rate Limits](https://docs.x.ai/docs/usage-tiers-and-rate-limits)

[Guides](https://docs.x.ai/docs/guides/chat)

[Chat](https://docs.x.ai/docs/guides/chat)[Streaming Response](https://docs.x.ai/docs/guides/streaming-response)[Image Understanding](https://docs.x.ai/docs/guides/image-understanding)[Function Calling](https://docs.x.ai/docs/guides/function-calling)[Structured Outputs](https://docs.x.ai/docs/guides/structured-outputs)[Fingerprint](https://docs.x.ai/docs/guides/fingerprint)[Migration from Other Providers](https://docs.x.ai/docs/guides/migration)

[REST API Reference](https://docs.x.ai/docs/api-reference)

[Chat completions](https://docs.x.ai/docs/api-reference#chat-completions)[Completions (legacy)](https://docs.x.ai/docs/api-reference#completions-legacy)[Create embeddings](https://docs.x.ai/docs/api-reference#create-embeddings)[API Keys](https://docs.x.ai/docs/api-reference#api-key)[List models](https://docs.x.ai/docs/api-reference#list-models)[Get model](https://docs.x.ai/docs/api-reference#get-model)[List language models](https://docs.x.ai/docs/api-reference#list-language-models)[Get language model](https://docs.x.ai/docs/api-reference#get-language-model)[List embedding models](https://docs.x.ai/docs/api-reference#list-embedding-models)[Get embedding model](https://docs.x.ai/docs/api-reference#get-embedding-model)

[

xAI Official Community

](https://discord.gg/x-ai)[

Email xAI Support

](mailto:support@x.ai)

# [#](#whats-up-developers)What's up, Developers?

First time xAI API or Large Language Model API user? Go to the [Introduction](introduction) for a brief background on Grok and interacting with LLM through API.

* * *

## [#](#getting-started)Getting started

Ready to build? Go to our [Hitchiker's Guide to Grok](tutorial).

* * *

## [#](#quick-reference)Quick reference

[

#### API Console

Create an API key to access the API

](https://console.x.ai)[

#### Endpoints

See parameters for each endpoint

](https://docs.x.ai/docs/api-reference)[

#### Integrations

Use the xAI API in your application

](https://docs.x.ai/docs/guides/migration)

* * *

## [#](#featured-models)Featured Models

grok-2-1212

Our latest text model supporting structured outputs, with improved efficiency, speed and capabilities.

grok-2-vision-1212

Our latest image understanding model with increased context window that can process a wide variety of visual information, including documents, diagrams, charts, screenshots, and photographs.

For previous models that are available, visit [Models and Pricing](models). Actual availability might be different for you team. You can view models and pricing available to your team from the [xAI Console Models Page](https://console.x.ai/team/default/models).

* * *

## [#](#migrating-from-another-llm-provider)Migrating from another LLM provider?

With just two line changes to your code, you're on Grok! Our API endpoint is designed to be compatible with OpenAI and Anthropic SDKs except capabilities not offered by the SDK.

You might want to read our guide [Migration from Other Providers](guides/migration) for more information and caveats.

**OpenAI SDK**

python

```
from openai import OpenAI
    
client = OpenAI(
  api_key=XAI_API_KEY,
  base_url="https://api.x.ai/v1",
)
```

**Anthropic SDK**

python

```
from anthropic import Anthropic

client = Anthropic(
  api_key=XAI_API_KEY,
  base_url="https://api.x.ai",
)
```

Change the `model` in your request to one of the [models](models) on xAI and you're all set!

* * *

## [#](#questions-and-feedback)Questions and feedback

If you have any questions or feedback, feel free to email us at [support@x.ai](mailto:support@x.ai).

Happy Grokking! 😎
---

---


## URL: https://docs.x.ai/docs/introduction

## Title: Welcome to the xAI documentation

Welcome to the xAI documentation

Menu

[Getting Started](https://docs.x.ai/docs/overview)

[Overview](https://docs.x.ai/docs/overview)[Introduction](https://docs.x.ai/docs/introduction)[The Hitchhiker's Guide to Grok](https://docs.x.ai/docs/tutorial)[Models and Pricing](https://docs.x.ai/docs/models)[Usage, Tiers and Rate Limits](https://docs.x.ai/docs/usage-tiers-and-rate-limits)

[Guides](https://docs.x.ai/docs/guides/chat)

[Chat](https://docs.x.ai/docs/guides/chat)[Streaming Response](https://docs.x.ai/docs/guides/streaming-response)[Image Understanding](https://docs.x.ai/docs/guides/image-understanding)[Function Calling](https://docs.x.ai/docs/guides/function-calling)[Structured Outputs](https://docs.x.ai/docs/guides/structured-outputs)[Fingerprint](https://docs.x.ai/docs/guides/fingerprint)[Migration from Other Providers](https://docs.x.ai/docs/guides/migration)

[REST API Reference](https://docs.x.ai/docs/api-reference)

[Chat completions](https://docs.x.ai/docs/api-reference#chat-completions)[Completions (legacy)](https://docs.x.ai/docs/api-reference#completions-legacy)[Create embeddings](https://docs.x.ai/docs/api-reference#create-embeddings)[API Keys](https://docs.x.ai/docs/api-reference#api-key)[List models](https://docs.x.ai/docs/api-reference#list-models)[Get model](https://docs.x.ai/docs/api-reference#get-model)[List language models](https://docs.x.ai/docs/api-reference#list-language-models)[Get language model](https://docs.x.ai/docs/api-reference#get-language-model)[List embedding models](https://docs.x.ai/docs/api-reference#list-embedding-models)[Get embedding model](https://docs.x.ai/docs/api-reference#get-embedding-model)

[

xAI Official Community

](https://discord.gg/x-ai)[

Email xAI Support

](mailto:support@x.ai)

# [#](#introduction)Introduction

## [#](#what-is-grok-and-xai-api)What is Grok and xAI API

Grok is a family of [Large Language Models (LLMs)](https://en.wikipedia.org/wiki/Large_language_model) developed by [xAI](https://x.ai).

Inspired by the Hitchhiker's Guide to the Galaxy and JARVIS from Iron Man, Grok is designed to answer almost any question with a touch of wit and humor, while also providing helpful and insightful responses. Grok utilizes next-token prediction model weights (models that predict the most likely word or symbol to follow a given text sequence) to know how to perform certain tasks.

Depending on the [model specifications](models), a user can interact with a Grok model to find answers to questions, interpret images, and generate images.

[xAI](https://x.ai) offers an API interface for developers to programmatically interact with Grok.

* * *

## [#](#how-is-grok-trained)How is Grok trained?

Grok was pre-trained by [xAI](https://x.ai) on a variety of data from publicly available sources and data sets reviewed and curated by AI Tutors who are human reviewers.

* * *

## [#](#what-is-an-api-do-i-need-it)What is an API? Do I need it?

An [API (Application Programming Interface)](https://en.wikipedia.org/wiki/API) is a set of protocols and tools for building software and applications. It allows different software to communicate with each other, enabling developers to add Grok's functionalities to their own projects.

You probably won't need xAI API, if you're only interested in an AI assistant experience like the one offered at [Grok on X](https://grok.x.com). But to integrate Grok into your application, or to add Grok to some third-party tools that you might encouter, you would need to use xAI API.

_Head to [the Hitchhiker's Guide to Galaxy](tutorial) and you will find (almost) all you need to start using xAI API._

* * *

## [#](#grok-on-x-vs-xai-api)Grok on X vs xAI API

To illustrate more, here are some main differences between Grok on X and xAI API:

*   **[**Grok on X**](https://grok.x.com)**
    *   Accessible on: [X](https://x.com) or [X Mobile Apps](https://help.x.com/en/using-x#twitter-on-your-device)
    *   Programming knowledge: Not required
    *   Account: Managed by [X](https://x.com)
    *   Provides an AI assistant who helps complete tasks, like answering questions, generate images, solving problems, and brainstorming.
*   [**xAI**](https://x.ai) **API**
    *   Accessible via: xAI API Endpoint (`https://api.x.ai`)
    *   Programming knowledge: Likely required
    *   Account: Managed by [xAI](https://x.ai)
    *   API access that provides a programmatical way to interact with Grok. Developers can integrate Grok into applications to expand the capabilities of their applications.

This documentation is primarily focused on xAI API access.

### [#](#benefits-of-xai-api)Benefits of xAI API

*   Customization: You can change inference prompt and different parameters to personalize Grok's responses.
*   Automation: In some workflows, you might want to prompt the model with different prompts in sequence.
---

---


## URL: https://docs.x.ai/docs/tutorial

## Title: Welcome to the xAI documentation

Welcome to the xAI documentation

Menu

[Getting Started](https://docs.x.ai/docs/overview)

[Overview](https://docs.x.ai/docs/overview)[Introduction](https://docs.x.ai/docs/introduction)[The Hitchhiker's Guide to Grok](https://docs.x.ai/docs/tutorial)[Models and Pricing](https://docs.x.ai/docs/models)[Usage, Tiers and Rate Limits](https://docs.x.ai/docs/usage-tiers-and-rate-limits)

[Guides](https://docs.x.ai/docs/guides/chat)

[Chat](https://docs.x.ai/docs/guides/chat)[Streaming Response](https://docs.x.ai/docs/guides/streaming-response)[Image Understanding](https://docs.x.ai/docs/guides/image-understanding)[Function Calling](https://docs.x.ai/docs/guides/function-calling)[Structured Outputs](https://docs.x.ai/docs/guides/structured-outputs)[Fingerprint](https://docs.x.ai/docs/guides/fingerprint)[Migration from Other Providers](https://docs.x.ai/docs/guides/migration)

[REST API Reference](https://docs.x.ai/docs/api-reference)

[Chat completions](https://docs.x.ai/docs/api-reference#chat-completions)[Completions (legacy)](https://docs.x.ai/docs/api-reference#completions-legacy)[Create embeddings](https://docs.x.ai/docs/api-reference#create-embeddings)[API Keys](https://docs.x.ai/docs/api-reference#api-key)[List models](https://docs.x.ai/docs/api-reference#list-models)[Get model](https://docs.x.ai/docs/api-reference#get-model)[List language models](https://docs.x.ai/docs/api-reference#list-language-models)[Get language model](https://docs.x.ai/docs/api-reference#get-language-model)[List embedding models](https://docs.x.ai/docs/api-reference#list-embedding-models)[Get embedding model](https://docs.x.ai/docs/api-reference#get-embedding-model)

[

xAI Official Community

](https://discord.gg/x-ai)[

Email xAI Support

](mailto:support@x.ai)

# [#](#the-hitchhikers-guide-to-grok)The Hitchhiker's Guide to Grok

Welcome to the Hitchhiker's Guide to Grok! This guide will walk you through the basics of using the xAI API to interact with our Grok models, providing you with the tools to harness AI in your applications.

* * *

## [#](#creating-your-account)Creating your account

You need an xAI account to access xAI API.

You can create an account at [xAI Console](https://console.x.ai).

* * *

## [#](#creating-an-api-key)Creating an API key

Go to [xAI Console API Keys Page](https://console.x.ai/team/default/api-keys) to create an API key.

For production use, **store your API key securely.** **Do not share** or **hard-code** it into your scripts, or **commit into version control systems** such as `git`. Use local environment variables or secure configuration files (e.g. [GitHub Secrets](https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions), [Google Cloud Secret Manager](https://cloud.google.com/secret-manager/docs/overview)).

Once you have generated an API key, export it as an environment variable in your terminal.

bash

```
export XAI_API_KEY="your_api_key_here"
```

* * *

## [#](#making-your-first-request)Making your first request

With your xAI API key exported as an environment variable, you're ready to make your first API request.

Let's test out the API using `curl`.

bash

```
curl https://api.x.ai/v1/chat/completions
    -H "Content-Type: application/json"
    -H "Authorization: Bearer $XAI_API_KEY"
    -d '{
        "messages": [
            {
            "role": "system",
            "content": "You are Grok, a chatbot inspired by the Hitchhikers Guide to the Galaxy."
            },
            {
            "role": "user",
            "content": "What is the meaning of life, the universe, and everything?"
            }
        ],
        "model": "grok-2-1212",
        "stream": false,
        "temperature": 0
        }'
```

Our API is also compatible with OpenAI and Anthropic SDK. For example, to make the same request with OpenAI Python SDK:

python

```
import os
from openai import OpenAI

XAI_API_KEY = os.getenv("XAI_API_KEY")
client = OpenAI(
    api_key=XAI_API_KEY,
    base_url="https://api.x.ai/v1",
)

completion = client.chat.completions.create(
    model="grok-2-1212",
    messages=[
        {"role": "system", "content": "You are Grok, a chatbot inspired by the Hitchhikers Guide to the Galaxy."},
        {"role": "user", "content": "What is the meaning of life, the universe, and everything?"},
    ],
)

print(completion.choices[0].message.content)
```

* * *

## [#](#using-grok-with-image-understanding-capability)Using Grok with image understanding capability

You can also send image in the prompt to models with image input capability. For example:

bash

```
curl https://api.x.ai/v1/chat/completions
  -H "Content-Type: application/json"
  -H "Authorization: Bearer $XAI_API_KEY"
  -d '{
        "messages": [
		    {
		        "role": "user",
		        "content": [
		            {
		                "type": "image_url",
		                "image_url": {
		                    "url": "https://science.nasa.gov/wp-content/uploads/2023/09/web-first-images-release.png",
		                    "detail": "high"
		                }
		            },
		            {
		                "type": "text",
		                "text": "What&quots in this image?"
		            }
		        ]
		    }
		],
        "model": "grok-2-vision-1212",
        "stream": false,
        "temperature": 0
      }'
```

You will see Grok's response:

> Ah, the age-old question. According to Douglas Adams, the answer is 42. However, the real trick lies in understanding the question, which remains a mystery. So, in essence, the meaning of life, the universe, and everything is to seek understanding, embrace the journey, and maybe have a good laugh along the way. Remember, as the Hitchhiker's Guide to the Galaxy suggests, "Don't Panic!" Keep exploring, keep questioning, and enjoy the ride through this cosmic adventure!

The `completion` object has more attributes available, such as usage information, tool calls, creation time, service tier and system fingerprint. You can use those information to build more complex interactions between your system and xAI API.

For details on advanced use cases or implementing other types of workflows, check out one of our [Guides](guides).

* * *

## [#](#monitoring-usage)Monitoring usage

As you use your API key, you will be charged for the number of tokens used. For an overview, you can monitor your usage on the [xAI Console Usage Page](https://console.x.ai/team/default/usage).

If you want a more granular, per request usage tracking, the API response includes a usage object that provides detail on prompt (input) and completion (output) token usage.

json

```
"usage": {
  "prompt_tokens": 41,
  "completion_tokens": 87,
  "total_tokens": 128,
  "prompt_tokens_details": {
    "text_tokens": 41,
    "audio_tokens": 0,
    "image_tokens": 0,
    "cached_tokens": 0
  }
}
```

If you send requests too frequently or with long prompts, you might run into rate limits and get an error response. For more information, read [Usage, Tiers and Rate Limits](usage-tiers-and-rate-limits).
---

---


## URL: https://docs.x.ai/docs/models

## Title: Welcome to the xAI documentation

Welcome to the xAI documentation

Menu

[Getting Started](https://docs.x.ai/docs/overview)

[Overview](https://docs.x.ai/docs/overview)[Introduction](https://docs.x.ai/docs/introduction)[The Hitchhiker's Guide to Grok](https://docs.x.ai/docs/tutorial)[Models and Pricing](https://docs.x.ai/docs/models)[Usage, Tiers and Rate Limits](https://docs.x.ai/docs/usage-tiers-and-rate-limits)

[Guides](https://docs.x.ai/docs/guides/chat)

[Chat](https://docs.x.ai/docs/guides/chat)[Streaming Response](https://docs.x.ai/docs/guides/streaming-response)[Image Understanding](https://docs.x.ai/docs/guides/image-understanding)[Function Calling](https://docs.x.ai/docs/guides/function-calling)[Structured Outputs](https://docs.x.ai/docs/guides/structured-outputs)[Fingerprint](https://docs.x.ai/docs/guides/fingerprint)[Migration from Other Providers](https://docs.x.ai/docs/guides/migration)

[REST API Reference](https://docs.x.ai/docs/api-reference)

[Chat completions](https://docs.x.ai/docs/api-reference#chat-completions)[Completions (legacy)](https://docs.x.ai/docs/api-reference#completions-legacy)[Create embeddings](https://docs.x.ai/docs/api-reference#create-embeddings)[API Keys](https://docs.x.ai/docs/api-reference#api-key)[List models](https://docs.x.ai/docs/api-reference#list-models)[Get model](https://docs.x.ai/docs/api-reference#get-model)[List language models](https://docs.x.ai/docs/api-reference#list-language-models)[Get language model](https://docs.x.ai/docs/api-reference#get-language-model)[List embedding models](https://docs.x.ai/docs/api-reference#list-embedding-models)[Get embedding model](https://docs.x.ai/docs/api-reference#get-embedding-model)

[

xAI Official Community

](https://discord.gg/x-ai)[

Email xAI Support

](mailto:support@x.ai)

# [#](#models-and-pricing)Models and Pricing

xAI provides the following models through its API:

Model

Input

Output

Context (Tokens)

Price (Per Million Tokens)

`grok-2-vision-1212`

image

text

text

8192

Text input

$2.00

Image input

$2.00

Completion

$10.00

`grok-2-1212`

text

text

131072

Text input

$2.00

Image input

\-

Completion

$10.00

`grok-vision-beta`

image

text

text

8192

Text input

$5.00

Image input

$5.00

Completion

$15.00

`grok-beta`

text

text

131072

Text input

$5.00

Image input

\-

Completion

$15.00

Note your model access might vary depending on various factors such as geographical location, account limitations, etc.

For the most up-to-date information on your team's model access, visit the API Models page on your [xAI Console Models Page](https://console.x.ai/team/default/models).

* * *

## [#](#known-limitations)Known limitations

*   **Chat models**
    *   No role order limitation: You can mix `system`, `user`, or `assistant` roles in any sequence for your conversation context.
*   **Image input models**
    *   Maximum image size: `10MiB`
    *   Maximum number of images: No limit
    *   Any image/text input order is accepted (e.g. text prompt can precede image prompt)

* * *

## [#](#model-input-and-output)Model input and output

Each model can have one or multiple input and output capabilities. The input capabilities refer to which type(s) of prompt can the model accept in the request message body. The output capabilities refer to which type(s) of completion will the model generate in the response message body.

This is a prompt example for models with `text` input capability:

json

```
[
  {
    "role": "system",
    "content": "You are Grok, a chatbot inspired by the Hitchhikers Guide to the Galaxy."
  },
  {
    "role": "user",
    "content": "What is the meaning of life, the universe, and everything?"
  }
]
```

This is a prompt example for models with `text` and `image` input capabilities:

json

```
[
  {
    "role": "user",
    "content": [
      {
        "type": "image_url",
        "image_url": {
          "url": "data:image/jpeg;base64,<base64_image_string>",
          "detail": "high"
        },
      },
      {
        "type": "text",
        "text": "What is on this image ?"
      }
    ]
  }
]
```

* * *

## [#](#context-window)Context window

The context window determines the maximum amount of token accepted by the model in the prompt.

_For more information on how token is counted, visit [Usage, Tier and Rate Limits](usage-tiers-and-rate-limits)._

If you are sending the entire conversation history in the prompt for use cases like chat assistant, the sum of all the prompts in your conversation history must be no greater than the context window.
---

---


## URL: https://docs.x.ai/docs/usage-tiers-and-rate-limits

## Title: Welcome to the xAI documentation

Welcome to the xAI documentation

Menu

[Getting Started](https://docs.x.ai/docs/overview)

[Overview](https://docs.x.ai/docs/overview)[Introduction](https://docs.x.ai/docs/introduction)[The Hitchhiker's Guide to Grok](https://docs.x.ai/docs/tutorial)[Models and Pricing](https://docs.x.ai/docs/models)[Usage, Tiers and Rate Limits](https://docs.x.ai/docs/usage-tiers-and-rate-limits)

[Guides](https://docs.x.ai/docs/guides/chat)

[Chat](https://docs.x.ai/docs/guides/chat)[Streaming Response](https://docs.x.ai/docs/guides/streaming-response)[Image Understanding](https://docs.x.ai/docs/guides/image-understanding)[Function Calling](https://docs.x.ai/docs/guides/function-calling)[Structured Outputs](https://docs.x.ai/docs/guides/structured-outputs)[Fingerprint](https://docs.x.ai/docs/guides/fingerprint)[Migration from Other Providers](https://docs.x.ai/docs/guides/migration)

[REST API Reference](https://docs.x.ai/docs/api-reference)

[Chat completions](https://docs.x.ai/docs/api-reference#chat-completions)[Completions (legacy)](https://docs.x.ai/docs/api-reference#completions-legacy)[Create embeddings](https://docs.x.ai/docs/api-reference#create-embeddings)[API Keys](https://docs.x.ai/docs/api-reference#api-key)[List models](https://docs.x.ai/docs/api-reference#list-models)[Get model](https://docs.x.ai/docs/api-reference#get-model)[List language models](https://docs.x.ai/docs/api-reference#list-language-models)[Get language model](https://docs.x.ai/docs/api-reference#get-language-model)[List embedding models](https://docs.x.ai/docs/api-reference#list-embedding-models)[Get embedding model](https://docs.x.ai/docs/api-reference#get-embedding-model)

[

xAI Official Community

](https://discord.gg/x-ai)[

Email xAI Support

](mailto:support@x.ai)

# [#](#usage-tiers-and-rate-limits)Usage, Tiers and Rate Limits

During beta, all users have access to the free tier rate limits. You might be able to request quota increase once you become paying customer with pre-purchased credit.

To check your tier and rate limit, visit [xAI Console Models Page](https://console.x.ai/team/default/models).

* * *

## [#](#tokens)Tokens

Token is the base unit of prompt size for model inference and pricing purposes. It is consisted of one or more character(s)/symbol(s).

When a Grok model handles your request, an input prompt will be decomposed into a list of tokens through a tokenizer. The model will then make inference based on the prompt tokens, and generate completion tokens. After the inference is completed, the completion tokens will be aggregated into a completion response sent back to you.

For a given text/image/etc. prompt or completion sequence, different tokenizers may break it down into different lengths of lists. Different Grok models may also share or use different tokenizers. Therefore, **the same prompt/completion sequence may not have the same amount of tokens across different models.**

The token count in a prompt/completion sequence should be approximately linear to the sequence length.

* * *

## [#](#hitting-rate-limits)Hitting rate limits

For each tier, there is a maximum amount of requests per minute. This is to ensure fair usage by all users of the system.

Once your request frequency has reached the rate limit, you will receive error code `429` in response.

You can either:

*   Upgrade your team to higher tiers
*   Change your consumption pattern to send less requests

* * *

## [#](#checking-token-consumption)Checking token consumption

In each completion response, there is a `usage` object detailing your prompt and completion token count. You might find it helpful to keep track of it, in order to avoid hitting rate limits or having cost surprises.

json

```
"usage": {
  "prompt_tokens": 41,
  "completion_tokens": 87,
  "total_tokens": 128,
  "prompt_tokens_details": {
    "text_tokens": 41,
    "audio_tokens": 0,
    "image_tokens": 0,
    "cached_tokens": 0
  }
}
```

You can also check with OpenAI or Anthropic SDKs. OpenAI SDK:

python

```
import os
from openai import OpenAI

XAI_API_KEY = os.getenv("XAI_API_KEY")
client = OpenAI(base_url="https://api.x.ai/v1", api_key=XAI_API_KEY)

completion = client.chat.completions.create(
    model="grok-2-1212",
    messages=[
        {
            "role": "system",
            "content": "You are Grok, a chatbot inspired by the Hitchhikers Guide to the Galaxy.",
        },
        {
            "role": "user",
            "content": "What is the meaning of life, the universe, and everything?",
        },
    ],
)

if completion.usage:
    print(completion.usage.to_json())
```
---

---


## URL: https://docs.x.ai/docs/api-reference

## Title: Welcome to the xAI documentation

Welcome to the xAI documentation

Menu

[Getting Started](https://docs.x.ai/docs/overview)

[Overview](https://docs.x.ai/docs/overview)[Introduction](https://docs.x.ai/docs/introduction)[The Hitchhiker's Guide to Grok](https://docs.x.ai/docs/tutorial)[Models and Pricing](https://docs.x.ai/docs/models)[Usage, Tiers and Rate Limits](https://docs.x.ai/docs/usage-tiers-and-rate-limits)

[Guides](https://docs.x.ai/docs/guides/chat)

[Chat](https://docs.x.ai/docs/guides/chat)[Streaming Response](https://docs.x.ai/docs/guides/streaming-response)[Image Understanding](https://docs.x.ai/docs/guides/image-understanding)[Function Calling](https://docs.x.ai/docs/guides/function-calling)[Structured Outputs](https://docs.x.ai/docs/guides/structured-outputs)[Fingerprint](https://docs.x.ai/docs/guides/fingerprint)[Migration from Other Providers](https://docs.x.ai/docs/guides/migration)

[REST API Reference](https://docs.x.ai/docs/api-reference)

[Chat completions](https://docs.x.ai/docs/api-reference#chat-completions)[Completions (legacy)](https://docs.x.ai/docs/api-reference#completions-legacy)[Create embeddings](https://docs.x.ai/docs/api-reference#create-embeddings)[API Keys](https://docs.x.ai/docs/api-reference#api-key)[List models](https://docs.x.ai/docs/api-reference#list-models)[Get model](https://docs.x.ai/docs/api-reference#get-model)[List language models](https://docs.x.ai/docs/api-reference#list-language-models)[Get language model](https://docs.x.ai/docs/api-reference#get-language-model)[List embedding models](https://docs.x.ai/docs/api-reference#list-embedding-models)[Get embedding model](https://docs.x.ai/docs/api-reference#get-embedding-model)

[

xAI Official Community

](https://discord.gg/x-ai)[

Email xAI Support

](mailto:support@x.ai)

# [#](#rest-api)REST API

The xAI Enterprise API is a robust, high-performance RESTful interface designed for seamless integration into existing systems. It offers advanced AI capabilities with full compatibility with the OpenAI REST API.

The base for all routes is at `https://api.x.ai`.

* * *

## [#](#chat-completions)Chat completions

This API route is shared by chat and image understanding capabilities.

/v1/chat/completions

Create a language model response for a given chat conversation. This endpoint is compatible with the OpenAI API.

## Request body

messages

array

Required

A list of messages that make up the the chat conversation. Different models support different message types, such as image and text.

model

string

Required

Model name for the model to use.

Show optional fields

DefinitionExample

POST

/v1/chat/completions

```
{
  "frequency_penalty": 0,
  "logit_bias": {},
  "logprobs": false,
  "max_tokens": 0,
  "messages": [],
  "model": "",
  "n": 0,
  "presence_penalty": 0,
  "response_format": null,
  "seed": 0,
  "stop": [],
  "stream": false,
  "stream_options": null,
  "temperature": 0,
  "tool_choice": null,
  "tools": [],
  "top_logprobs": 0,
  "top_p": 0,
  "user": ""
}
```

200

Response

```
{
  "choices": [],
  "created": 0,
  "id": "",
  "model": "",
  "object": "",
  "system_fingerprint": "",
  "usage": null
}
```

200400

* * *

## [#](#completions-legacy)Completions (legacy)

Depreciated route in favor of [chat completions](#chat-completions). Offered for backward compatibility.

/v1/completions

Create a language model response for a given prompt. This endpoint is compatible with the OpenAI API.

## Request body

model

string

Required

Specifies the model to be used for the request.

prompt

unknown

Required

Show optional fields

DefinitionExample

POST

/v1/completions

```
{
  "best_of": 0,
  "echo": false,
  "frequency_penalty": 0,
  "logit_bias": {},
  "logprobs": false,
  "max_tokens": 0,
  "model": "",
  "n": 0,
  "presence_penalty": 0,
  "prompt": null,
  "seed": 0,
  "stop": [],
  "stream": false,
  "stream_options": null,
  "suffix": "",
  "temperature": 0,
  "top_p": 0,
  "user": ""
}
```

200

Response

```
{
  "choices": [],
  "created": 0,
  "id": "",
  "model": "",
  "object": "",
  "system_fingerprint": "",
  "usage": null
}
```

200400

Alternatively, an Anthropic compatible endpoint is available.

/v1/complete

Complete endpoint. This endpoint is compatible with the Anthropic API.

## Request body

max\_tokens\_to\_sample

integer

Required

model

string

Required

prompt

string

Required

Show optional fields

DefinitionExample

POST

/v1/complete

```
{
  "max_tokens_to_sample": 0,
  "metadata": null,
  "model": "",
  "prompt": "",
  "stop_sequences": [],
  "stream": false,
  "temperature": 0,
  "top_k": 0,
  "top_p": 0
}
```

200

Response

```
{
  "completion": "",
  "id": "",
  "model": "",
  "stop_reason": "",
  "type": ""
}
```

200400

* * *

## [#](#create-embeddings)Create embeddings

/v1/embeddings

Create an embedding vector representation corresponding to the input text. This endpoint is compatible with the OpenAI API.

## Request body

input

unknown

Required

model

string

Required

ID of the model to use.

Show optional fields

DefinitionExample

POST

/v1/embeddings

```
{
  "dimensions": 0,
  "encoding_format": "",
  "input": null,
  "model": "",
  "preview": false,
  "user": ""
}
```

200

Response

```
{
  "data": [],
  "model": "",
  "object": "",
  "usage": null
}
```

200400

* * *

## [#](#api-key)API key

/v1/api-key

Get information about an API key, including name, status, permissions and users who created or modified this key.

DefinitionExample

GET

/v1/api-key

```
No parameters.
```

200

Response

```
{
  "acls": [],
  "api_key_blocked": false,
  "api_key_disabled": false,
  "api_key_id": "",
  "create_time": "",
  "modified_by": "",
  "modify_time": "",
  "name": "",
  "redacted_api_key": "",
  "team_blocked": false,
  "team_id": "",
  "user_id": ""
}
```

200400

* * *

## [#](#list-models)List models

/v1/models

List all models available with reduced information. This endpoint is compatible with the OpenAI API.

DefinitionExample

GET

/v1/models

```
No parameters.
```

200

Response

```
{
  "data": [],
  "object": ""
}
```

200400

* * *

## [#](#get-model)Get model

/v1/models/{model\_id}

Get the summary of a model with reduced information. This endpoint is compatible with the OpenAI API.

## Path parameters

model\_id

string

ID of the model to get.

DefinitionExample

GET

/v1/models/{model\_id}

```
No parameters.
```

200

Response

```
{
  "created": 0,
  "id": "",
  "object": "",
  "owned_by": ""
}
```

200400404

* * *

## [#](#list-language-models)List language models

/v1/language-models

List all language models available.

DefinitionExample

GET

/v1/language-models

```
No parameters.
```

200

Response

```
{
  "models": []
}
```

200400

* * *

## [#](#get-language-model)Get language model

/v1/language-models/{model\_id}

Get information about a language model using its ID.

## Path parameters

model\_id

string

ID of the model to get.

DefinitionExample

GET

/v1/language-models/{model\_id}

```
No parameters.
```

200

Response

```
{
  "aliases": [],
  "completion_text_token_price": 0,
  "created": 0,
  "fingerprint": "",
  "id": "",
  "input_modalities": [],
  "object": "",
  "output_modalities": [],
  "owned_by": "",
  "prompt_image_token_price": 0,
  "prompt_text_token_price": 0,
  "version": ""
}
```

200400404

* * *

## [#](#list-embedding-models)List embedding models

/v1/embedding-models

List all embedding models available for an API key.

DefinitionExample

GET

/v1/embedding-models

```
No parameters.
```

200

Response

```
{
  "models": []
}
```

200400

* * *

## [#](#get-embedding-model)Get embedding model

/v1/embedding-models/{model\_id}

Embedding model retrieval with full information.

## Path parameters

model\_id

string

ID of the model to get.

DefinitionExample

GET

/v1/embedding-models/{model\_id}

```
No parameters.
```

200

Response

```
{
  "aliases": [],
  "created": 0,
  "fingerprint": "",
  "id": "",
  "input_modalities": [],
  "object": "",
  "owned_by": "",
  "prompt_image_token_price": 0,
  "prompt_text_token_price": 0,
  "version": ""
}
```

200400404
---

---


## URL: https://docs.x.ai/docs/api-reference#chat-completions

## Title: Welcome to the xAI documentation

Welcome to the xAI documentation

Menu

[Getting Started](https://docs.x.ai/docs/overview)

[Overview](https://docs.x.ai/docs/overview)[Introduction](https://docs.x.ai/docs/introduction)[The Hitchhiker's Guide to Grok](https://docs.x.ai/docs/tutorial)[Models and Pricing](https://docs.x.ai/docs/models)[Usage, Tiers and Rate Limits](https://docs.x.ai/docs/usage-tiers-and-rate-limits)

[Guides](https://docs.x.ai/docs/guides/chat)

[Chat](https://docs.x.ai/docs/guides/chat)[Streaming Response](https://docs.x.ai/docs/guides/streaming-response)[Image Understanding](https://docs.x.ai/docs/guides/image-understanding)[Function Calling](https://docs.x.ai/docs/guides/function-calling)[Structured Outputs](https://docs.x.ai/docs/guides/structured-outputs)[Fingerprint](https://docs.x.ai/docs/guides/fingerprint)[Migration from Other Providers](https://docs.x.ai/docs/guides/migration)

[REST API Reference](https://docs.x.ai/docs/api-reference)

[Chat completions](https://docs.x.ai/docs/api-reference#chat-completions)[Completions (legacy)](https://docs.x.ai/docs/api-reference#completions-legacy)[Create embeddings](https://docs.x.ai/docs/api-reference#create-embeddings)[API Keys](https://docs.x.ai/docs/api-reference#api-key)[List models](https://docs.x.ai/docs/api-reference#list-models)[Get model](https://docs.x.ai/docs/api-reference#get-model)[List language models](https://docs.x.ai/docs/api-reference#list-language-models)[Get language model](https://docs.x.ai/docs/api-reference#get-language-model)[List embedding models](https://docs.x.ai/docs/api-reference#list-embedding-models)[Get embedding model](https://docs.x.ai/docs/api-reference#get-embedding-model)

[

xAI Official Community

](https://discord.gg/x-ai)[

Email xAI Support

](mailto:support@x.ai)

# [#](#rest-api)REST API

The xAI Enterprise API is a robust, high-performance RESTful interface designed for seamless integration into existing systems. It offers advanced AI capabilities with full compatibility with the OpenAI REST API.

The base for all routes is at `https://api.x.ai`.

* * *

## [#](#chat-completions)Chat completions

This API route is shared by chat and image understanding capabilities.

/v1/chat/completions

Create a language model response for a given chat conversation. This endpoint is compatible with the OpenAI API.

## Request body

messages

array

Required

A list of messages that make up the the chat conversation. Different models support different message types, such as image and text.

model

string

Required

Model name for the model to use.

Show optional fields

DefinitionExample

POST

/v1/chat/completions

```
{
  "frequency_penalty": 0,
  "logit_bias": {},
  "logprobs": false,
  "max_tokens": 0,
  "messages": [],
  "model": "",
  "n": 0,
  "presence_penalty": 0,
  "response_format": null,
  "seed": 0,
  "stop": [],
  "stream": false,
  "stream_options": null,
  "temperature": 0,
  "tool_choice": null,
  "tools": [],
  "top_logprobs": 0,
  "top_p": 0,
  "user": ""
}
```

200

Response

```
{
  "choices": [],
  "created": 0,
  "id": "",
  "model": "",
  "object": "",
  "system_fingerprint": "",
  "usage": null
}
```

200400

* * *

## [#](#completions-legacy)Completions (legacy)

Depreciated route in favor of [chat completions](#chat-completions). Offered for backward compatibility.

/v1/completions

Create a language model response for a given prompt. This endpoint is compatible with the OpenAI API.

## Request body

model

string

Required

Specifies the model to be used for the request.

prompt

unknown

Required

Show optional fields

DefinitionExample

POST

/v1/completions

```
{
  "best_of": 0,
  "echo": false,
  "frequency_penalty": 0,
  "logit_bias": {},
  "logprobs": false,
  "max_tokens": 0,
  "model": "",
  "n": 0,
  "presence_penalty": 0,
  "prompt": null,
  "seed": 0,
  "stop": [],
  "stream": false,
  "stream_options": null,
  "suffix": "",
  "temperature": 0,
  "top_p": 0,
  "user": ""
}
```

200

Response

```
{
  "choices": [],
  "created": 0,
  "id": "",
  "model": "",
  "object": "",
  "system_fingerprint": "",
  "usage": null
}
```

200400

Alternatively, an Anthropic compatible endpoint is available.

/v1/complete

Complete endpoint. This endpoint is compatible with the Anthropic API.

## Request body

max\_tokens\_to\_sample

integer

Required

model

string

Required

prompt

string

Required

Show optional fields

DefinitionExample

POST

/v1/complete

```
{
  "max_tokens_to_sample": 0,
  "metadata": null,
  "model": "",
  "prompt": "",
  "stop_sequences": [],
  "stream": false,
  "temperature": 0,
  "top_k": 0,
  "top_p": 0
}
```

200

Response

```
{
  "completion": "",
  "id": "",
  "model": "",
  "stop_reason": "",
  "type": ""
}
```

200400

* * *

## [#](#create-embeddings)Create embeddings

/v1/embeddings

Create an embedding vector representation corresponding to the input text. This endpoint is compatible with the OpenAI API.

## Request body

input

unknown

Required

model

string

Required

ID of the model to use.

Show optional fields

DefinitionExample

POST

/v1/embeddings

```
{
  "dimensions": 0,
  "encoding_format": "",
  "input": null,
  "model": "",
  "preview": false,
  "user": ""
}
```

200

Response

```
{
  "data": [],
  "model": "",
  "object": "",
  "usage": null
}
```

200400

* * *

## [#](#api-key)API key

/v1/api-key

Get information about an API key, including name, status, permissions and users who created or modified this key.

DefinitionExample

GET

/v1/api-key

```
No parameters.
```

200

Response

```
{
  "acls": [],
  "api_key_blocked": false,
  "api_key_disabled": false,
  "api_key_id": "",
  "create_time": "",
  "modified_by": "",
  "modify_time": "",
  "name": "",
  "redacted_api_key": "",
  "team_blocked": false,
  "team_id": "",
  "user_id": ""
}
```

200400

* * *

## [#](#list-models)List models

/v1/models

List all models available with reduced information. This endpoint is compatible with the OpenAI API.

DefinitionExample

GET

/v1/models

```
No parameters.
```

200

Response

```
{
  "data": [],
  "object": ""
}
```

200400

* * *

## [#](#get-model)Get model

/v1/models/{model\_id}

Get the summary of a model with reduced information. This endpoint is compatible with the OpenAI API.

## Path parameters

model\_id

string

ID of the model to get.

DefinitionExample

GET

/v1/models/{model\_id}

```
No parameters.
```

200

Response

```
{
  "created": 0,
  "id": "",
  "object": "",
  "owned_by": ""
}
```

200400404

* * *

## [#](#list-language-models)List language models

/v1/language-models

List all language models available.

DefinitionExample

GET

/v1/language-models

```
No parameters.
```

200

Response

```
{
  "models": []
}
```

200400

* * *

## [#](#get-language-model)Get language model

/v1/language-models/{model\_id}

Get information about a language model using its ID.

## Path parameters

model\_id

string

ID of the model to get.

DefinitionExample

GET

/v1/language-models/{model\_id}

```
No parameters.
```

200

Response

```
{
  "aliases": [],
  "completion_text_token_price": 0,
  "created": 0,
  "fingerprint": "",
  "id": "",
  "input_modalities": [],
  "object": "",
  "output_modalities": [],
  "owned_by": "",
  "prompt_image_token_price": 0,
  "prompt_text_token_price": 0,
  "version": ""
}
```

200400404

* * *

## [#](#list-embedding-models)List embedding models

/v1/embedding-models

List all embedding models available for an API key.

DefinitionExample

GET

/v1/embedding-models

```
No parameters.
```

200

Response

```
{
  "models": []
}
```

200400

* * *

## [#](#get-embedding-model)Get embedding model

/v1/embedding-models/{model\_id}

Embedding model retrieval with full information.

## Path parameters

model\_id

string

ID of the model to get.

DefinitionExample

GET

/v1/embedding-models/{model\_id}

```
No parameters.
```

200

Response

```
{
  "aliases": [],
  "created": 0,
  "fingerprint": "",
  "id": "",
  "input_modalities": [],
  "object": "",
  "owned_by": "",
  "prompt_image_token_price": 0,
  "prompt_text_token_price": 0,
  "version": ""
}
```

200400404
---

---


## URL: https://docs.x.ai/docs/api-reference#completions-legacy

## Title: Welcome to the xAI documentation

Welcome to the xAI documentation

Menu

[Getting Started](https://docs.x.ai/docs/overview)

[Overview](https://docs.x.ai/docs/overview)[Introduction](https://docs.x.ai/docs/introduction)[The Hitchhiker's Guide to Grok](https://docs.x.ai/docs/tutorial)[Models and Pricing](https://docs.x.ai/docs/models)[Usage, Tiers and Rate Limits](https://docs.x.ai/docs/usage-tiers-and-rate-limits)

[Guides](https://docs.x.ai/docs/guides/chat)

[Chat](https://docs.x.ai/docs/guides/chat)[Streaming Response](https://docs.x.ai/docs/guides/streaming-response)[Image Understanding](https://docs.x.ai/docs/guides/image-understanding)[Function Calling](https://docs.x.ai/docs/guides/function-calling)[Structured Outputs](https://docs.x.ai/docs/guides/structured-outputs)[Fingerprint](https://docs.x.ai/docs/guides/fingerprint)[Migration from Other Providers](https://docs.x.ai/docs/guides/migration)

[REST API Reference](https://docs.x.ai/docs/api-reference)

[Chat completions](https://docs.x.ai/docs/api-reference#chat-completions)[Completions (legacy)](https://docs.x.ai/docs/api-reference#completions-legacy)[Create embeddings](https://docs.x.ai/docs/api-reference#create-embeddings)[API Keys](https://docs.x.ai/docs/api-reference#api-key)[List models](https://docs.x.ai/docs/api-reference#list-models)[Get model](https://docs.x.ai/docs/api-reference#get-model)[List language models](https://docs.x.ai/docs/api-reference#list-language-models)[Get language model](https://docs.x.ai/docs/api-reference#get-language-model)[List embedding models](https://docs.x.ai/docs/api-reference#list-embedding-models)[Get embedding model](https://docs.x.ai/docs/api-reference#get-embedding-model)

[

xAI Official Community

](https://discord.gg/x-ai)[

Email xAI Support

](mailto:support@x.ai)

# [#](#rest-api)REST API

The xAI Enterprise API is a robust, high-performance RESTful interface designed for seamless integration into existing systems. It offers advanced AI capabilities with full compatibility with the OpenAI REST API.

The base for all routes is at `https://api.x.ai`.

* * *

## [#](#chat-completions)Chat completions

This API route is shared by chat and image understanding capabilities.

/v1/chat/completions

Create a language model response for a given chat conversation. This endpoint is compatible with the OpenAI API.

## Request body

messages

array

Required

A list of messages that make up the the chat conversation. Different models support different message types, such as image and text.

model

string

Required

Model name for the model to use.

Show optional fields

DefinitionExample

POST

/v1/chat/completions

```
{
  "frequency_penalty": 0,
  "logit_bias": {},
  "logprobs": false,
  "max_tokens": 0,
  "messages": [],
  "model": "",
  "n": 0,
  "presence_penalty": 0,
  "response_format": null,
  "seed": 0,
  "stop": [],
  "stream": false,
  "stream_options": null,
  "temperature": 0,
  "tool_choice": null,
  "tools": [],
  "top_logprobs": 0,
  "top_p": 0,
  "user": ""
}
```

200

Response

```
{
  "choices": [],
  "created": 0,
  "id": "",
  "model": "",
  "object": "",
  "system_fingerprint": "",
  "usage": null
}
```

200400

* * *

## [#](#completions-legacy)Completions (legacy)

Depreciated route in favor of [chat completions](#chat-completions). Offered for backward compatibility.

/v1/completions

Create a language model response for a given prompt. This endpoint is compatible with the OpenAI API.

## Request body

model

string

Required

Specifies the model to be used for the request.

prompt

unknown

Required

Show optional fields

DefinitionExample

POST

/v1/completions

```
{
  "best_of": 0,
  "echo": false,
  "frequency_penalty": 0,
  "logit_bias": {},
  "logprobs": false,
  "max_tokens": 0,
  "model": "",
  "n": 0,
  "presence_penalty": 0,
  "prompt": null,
  "seed": 0,
  "stop": [],
  "stream": false,
  "stream_options": null,
  "suffix": "",
  "temperature": 0,
  "top_p": 0,
  "user": ""
}
```

200

Response

```
{
  "choices": [],
  "created": 0,
  "id": "",
  "model": "",
  "object": "",
  "system_fingerprint": "",
  "usage": null
}
```

200400

Alternatively, an Anthropic compatible endpoint is available.

/v1/complete

Complete endpoint. This endpoint is compatible with the Anthropic API.

## Request body

max\_tokens\_to\_sample

integer

Required

model

string

Required

prompt

string

Required

Show optional fields

DefinitionExample

POST

/v1/complete

```
{
  "max_tokens_to_sample": 0,
  "metadata": null,
  "model": "",
  "prompt": "",
  "stop_sequences": [],
  "stream": false,
  "temperature": 0,
  "top_k": 0,
  "top_p": 0
}
```

200

Response

```
{
  "completion": "",
  "id": "",
  "model": "",
  "stop_reason": "",
  "type": ""
}
```

200400

* * *

## [#](#create-embeddings)Create embeddings

/v1/embeddings

Create an embedding vector representation corresponding to the input text. This endpoint is compatible with the OpenAI API.

## Request body

input

unknown

Required

model

string

Required

ID of the model to use.

Show optional fields

DefinitionExample

POST

/v1/embeddings

```
{
  "dimensions": 0,
  "encoding_format": "",
  "input": null,
  "model": "",
  "preview": false,
  "user": ""
}
```

200

Response

```
{
  "data": [],
  "model": "",
  "object": "",
  "usage": null
}
```

200400

* * *

## [#](#api-key)API key

/v1/api-key

Get information about an API key, including name, status, permissions and users who created or modified this key.

DefinitionExample

GET

/v1/api-key

```
No parameters.
```

200

Response

```
{
  "acls": [],
  "api_key_blocked": false,
  "api_key_disabled": false,
  "api_key_id": "",
  "create_time": "",
  "modified_by": "",
  "modify_time": "",
  "name": "",
  "redacted_api_key": "",
  "team_blocked": false,
  "team_id": "",
  "user_id": ""
}
```

200400

* * *

## [#](#list-models)List models

/v1/models

List all models available with reduced information. This endpoint is compatible with the OpenAI API.

DefinitionExample

GET

/v1/models

```
No parameters.
```

200

Response

```
{
  "data": [],
  "object": ""
}
```

200400

* * *

## [#](#get-model)Get model

/v1/models/{model\_id}

Get the summary of a model with reduced information. This endpoint is compatible with the OpenAI API.

## Path parameters

model\_id

string

ID of the model to get.

DefinitionExample

GET

/v1/models/{model\_id}

```
No parameters.
```

200

Response

```
{
  "created": 0,
  "id": "",
  "object": "",
  "owned_by": ""
}
```

200400404

* * *

## [#](#list-language-models)List language models

/v1/language-models

List all language models available.

DefinitionExample

GET

/v1/language-models

```
No parameters.
```

200

Response

```
{
  "models": []
}
```

200400

* * *

## [#](#get-language-model)Get language model

/v1/language-models/{model\_id}

Get information about a language model using its ID.

## Path parameters

model\_id

string

ID of the model to get.

DefinitionExample

GET

/v1/language-models/{model\_id}

```
No parameters.
```

200

Response

```
{
  "aliases": [],
  "completion_text_token_price": 0,
  "created": 0,
  "fingerprint": "",
  "id": "",
  "input_modalities": [],
  "object": "",
  "output_modalities": [],
  "owned_by": "",
  "prompt_image_token_price": 0,
  "prompt_text_token_price": 0,
  "version": ""
}
```

200400404

* * *

## [#](#list-embedding-models)List embedding models

/v1/embedding-models

List all embedding models available for an API key.

DefinitionExample

GET

/v1/embedding-models

```
No parameters.
```

200

Response

```
{
  "models": []
}
```

200400

* * *

## [#](#get-embedding-model)Get embedding model

/v1/embedding-models/{model\_id}

Embedding model retrieval with full information.

## Path parameters

model\_id

string

ID of the model to get.

DefinitionExample

GET

/v1/embedding-models/{model\_id}

```
No parameters.
```

200

Response

```
{
  "aliases": [],
  "created": 0,
  "fingerprint": "",
  "id": "",
  "input_modalities": [],
  "object": "",
  "owned_by": "",
  "prompt_image_token_price": 0,
  "prompt_text_token_price": 0,
  "version": ""
}
```

200400404
---

---


## URL: https://docs.x.ai/docs/api-reference#create-embeddings

## Title: Welcome to the xAI documentation

Welcome to the xAI documentation

Menu

[Getting Started](https://docs.x.ai/docs/overview)

[Overview](https://docs.x.ai/docs/overview)[Introduction](https://docs.x.ai/docs/introduction)[The Hitchhiker's Guide to Grok](https://docs.x.ai/docs/tutorial)[Models and Pricing](https://docs.x.ai/docs/models)[Usage, Tiers and Rate Limits](https://docs.x.ai/docs/usage-tiers-and-rate-limits)

[Guides](https://docs.x.ai/docs/guides/chat)

[Chat](https://docs.x.ai/docs/guides/chat)[Streaming Response](https://docs.x.ai/docs/guides/streaming-response)[Image Understanding](https://docs.x.ai/docs/guides/image-understanding)[Function Calling](https://docs.x.ai/docs/guides/function-calling)[Structured Outputs](https://docs.x.ai/docs/guides/structured-outputs)[Fingerprint](https://docs.x.ai/docs/guides/fingerprint)[Migration from Other Providers](https://docs.x.ai/docs/guides/migration)

[REST API Reference](https://docs.x.ai/docs/api-reference)

[Chat completions](https://docs.x.ai/docs/api-reference#chat-completions)[Completions (legacy)](https://docs.x.ai/docs/api-reference#completions-legacy)[Create embeddings](https://docs.x.ai/docs/api-reference#create-embeddings)[API Keys](https://docs.x.ai/docs/api-reference#api-key)[List models](https://docs.x.ai/docs/api-reference#list-models)[Get model](https://docs.x.ai/docs/api-reference#get-model)[List language models](https://docs.x.ai/docs/api-reference#list-language-models)[Get language model](https://docs.x.ai/docs/api-reference#get-language-model)[List embedding models](https://docs.x.ai/docs/api-reference#list-embedding-models)[Get embedding model](https://docs.x.ai/docs/api-reference#get-embedding-model)

[

xAI Official Community

](https://discord.gg/x-ai)[

Email xAI Support

](mailto:support@x.ai)

# [#](#rest-api)REST API

The xAI Enterprise API is a robust, high-performance RESTful interface designed for seamless integration into existing systems. It offers advanced AI capabilities with full compatibility with the OpenAI REST API.

The base for all routes is at `https://api.x.ai`.

* * *

## [#](#chat-completions)Chat completions

This API route is shared by chat and image understanding capabilities.

/v1/chat/completions

Create a language model response for a given chat conversation. This endpoint is compatible with the OpenAI API.

## Request body

messages

array

Required

A list of messages that make up the the chat conversation. Different models support different message types, such as image and text.

model

string

Required

Model name for the model to use.

Show optional fields

DefinitionExample

POST

/v1/chat/completions

```
{
  "frequency_penalty": 0,
  "logit_bias": {},
  "logprobs": false,
  "max_tokens": 0,
  "messages": [],
  "model": "",
  "n": 0,
  "presence_penalty": 0,
  "response_format": null,
  "seed": 0,
  "stop": [],
  "stream": false,
  "stream_options": null,
  "temperature": 0,
  "tool_choice": null,
  "tools": [],
  "top_logprobs": 0,
  "top_p": 0,
  "user": ""
}
```

200

Response

```
{
  "choices": [],
  "created": 0,
  "id": "",
  "model": "",
  "object": "",
  "system_fingerprint": "",
  "usage": null
}
```

200400

* * *

## [#](#completions-legacy)Completions (legacy)

Depreciated route in favor of [chat completions](#chat-completions). Offered for backward compatibility.

/v1/completions

Create a language model response for a given prompt. This endpoint is compatible with the OpenAI API.

## Request body

model

string

Required

Specifies the model to be used for the request.

prompt

unknown

Required

Show optional fields

DefinitionExample

POST

/v1/completions

```
{
  "best_of": 0,
  "echo": false,
  "frequency_penalty": 0,
  "logit_bias": {},
  "logprobs": false,
  "max_tokens": 0,
  "model": "",
  "n": 0,
  "presence_penalty": 0,
  "prompt": null,
  "seed": 0,
  "stop": [],
  "stream": false,
  "stream_options": null,
  "suffix": "",
  "temperature": 0,
  "top_p": 0,
  "user": ""
}
```

200

Response

```
{
  "choices": [],
  "created": 0,
  "id": "",
  "model": "",
  "object": "",
  "system_fingerprint": "",
  "usage": null
}
```

200400

Alternatively, an Anthropic compatible endpoint is available.

/v1/complete

Complete endpoint. This endpoint is compatible with the Anthropic API.

## Request body

max\_tokens\_to\_sample

integer

Required

model

string

Required

prompt

string

Required

Show optional fields

DefinitionExample

POST

/v1/complete

```
{
  "max_tokens_to_sample": 0,
  "metadata": null,
  "model": "",
  "prompt": "",
  "stop_sequences": [],
  "stream": false,
  "temperature": 0,
  "top_k": 0,
  "top_p": 0
}
```

200

Response

```
{
  "completion": "",
  "id": "",
  "model": "",
  "stop_reason": "",
  "type": ""
}
```

200400

* * *

## [#](#create-embeddings)Create embeddings

/v1/embeddings

Create an embedding vector representation corresponding to the input text. This endpoint is compatible with the OpenAI API.

## Request body

input

unknown

Required

model

string

Required

ID of the model to use.

Show optional fields

DefinitionExample

POST

/v1/embeddings

```
{
  "dimensions": 0,
  "encoding_format": "",
  "input": null,
  "model": "",
  "preview": false,
  "user": ""
}
```

200

Response

```
{
  "data": [],
  "model": "",
  "object": "",
  "usage": null
}
```

200400

* * *

## [#](#api-key)API key

/v1/api-key

Get information about an API key, including name, status, permissions and users who created or modified this key.

DefinitionExample

GET

/v1/api-key

```
No parameters.
```

200

Response

```
{
  "acls": [],
  "api_key_blocked": false,
  "api_key_disabled": false,
  "api_key_id": "",
  "create_time": "",
  "modified_by": "",
  "modify_time": "",
  "name": "",
  "redacted_api_key": "",
  "team_blocked": false,
  "team_id": "",
  "user_id": ""
}
```

200400

* * *

## [#](#list-models)List models

/v1/models

List all models available with reduced information. This endpoint is compatible with the OpenAI API.

DefinitionExample

GET

/v1/models

```
No parameters.
```

200

Response

```
{
  "data": [],
  "object": ""
}
```

200400

* * *

## [#](#get-model)Get model

/v1/models/{model\_id}

Get the summary of a model with reduced information. This endpoint is compatible with the OpenAI API.

## Path parameters

model\_id

string

ID of the model to get.

DefinitionExample

GET

/v1/models/{model\_id}

```
No parameters.
```

200

Response

```
{
  "created": 0,
  "id": "",
  "object": "",
  "owned_by": ""
}
```

200400404

* * *

## [#](#list-language-models)List language models

/v1/language-models

List all language models available.

DefinitionExample

GET

/v1/language-models

```
No parameters.
```

200

Response

```
{
  "models": []
}
```

200400

* * *

## [#](#get-language-model)Get language model

/v1/language-models/{model\_id}

Get information about a language model using its ID.

## Path parameters

model\_id

string

ID of the model to get.

DefinitionExample

GET

/v1/language-models/{model\_id}

```
No parameters.
```

200

Response

```
{
  "aliases": [],
  "completion_text_token_price": 0,
  "created": 0,
  "fingerprint": "",
  "id": "",
  "input_modalities": [],
  "object": "",
  "output_modalities": [],
  "owned_by": "",
  "prompt_image_token_price": 0,
  "prompt_text_token_price": 0,
  "version": ""
}
```

200400404

* * *

## [#](#list-embedding-models)List embedding models

/v1/embedding-models

List all embedding models available for an API key.

DefinitionExample

GET

/v1/embedding-models

```
No parameters.
```

200

Response

```
{
  "models": []
}
```

200400

* * *

## [#](#get-embedding-model)Get embedding model

/v1/embedding-models/{model\_id}

Embedding model retrieval with full information.

## Path parameters

model\_id

string

ID of the model to get.

DefinitionExample

GET

/v1/embedding-models/{model\_id}

```
No parameters.
```

200

Response

```
{
  "aliases": [],
  "created": 0,
  "fingerprint": "",
  "id": "",
  "input_modalities": [],
  "object": "",
  "owned_by": "",
  "prompt_image_token_price": 0,
  "prompt_text_token_price": 0,
  "version": ""
}
```

200400404
---

---


## URL: https://docs.x.ai/docs/api-reference#api-key

## Title: Welcome to the xAI documentation

Welcome to the xAI documentation

Menu

[Getting Started](https://docs.x.ai/docs/overview)

[Overview](https://docs.x.ai/docs/overview)[Introduction](https://docs.x.ai/docs/introduction)[The Hitchhiker's Guide to Grok](https://docs.x.ai/docs/tutorial)[Models and Pricing](https://docs.x.ai/docs/models)[Usage, Tiers and Rate Limits](https://docs.x.ai/docs/usage-tiers-and-rate-limits)

[Guides](https://docs.x.ai/docs/guides/chat)

[Chat](https://docs.x.ai/docs/guides/chat)[Streaming Response](https://docs.x.ai/docs/guides/streaming-response)[Image Understanding](https://docs.x.ai/docs/guides/image-understanding)[Function Calling](https://docs.x.ai/docs/guides/function-calling)[Structured Outputs](https://docs.x.ai/docs/guides/structured-outputs)[Fingerprint](https://docs.x.ai/docs/guides/fingerprint)[Migration from Other Providers](https://docs.x.ai/docs/guides/migration)

[REST API Reference](https://docs.x.ai/docs/api-reference)

[Chat completions](https://docs.x.ai/docs/api-reference#chat-completions)[Completions (legacy)](https://docs.x.ai/docs/api-reference#completions-legacy)[Create embeddings](https://docs.x.ai/docs/api-reference#create-embeddings)[API Keys](https://docs.x.ai/docs/api-reference#api-key)[List models](https://docs.x.ai/docs/api-reference#list-models)[Get model](https://docs.x.ai/docs/api-reference#get-model)[List language models](https://docs.x.ai/docs/api-reference#list-language-models)[Get language model](https://docs.x.ai/docs/api-reference#get-language-model)[List embedding models](https://docs.x.ai/docs/api-reference#list-embedding-models)[Get embedding model](https://docs.x.ai/docs/api-reference#get-embedding-model)

[

xAI Official Community

](https://discord.gg/x-ai)[

Email xAI Support

](mailto:support@x.ai)

# [#](#rest-api)REST API

The xAI Enterprise API is a robust, high-performance RESTful interface designed for seamless integration into existing systems. It offers advanced AI capabilities with full compatibility with the OpenAI REST API.

The base for all routes is at `https://api.x.ai`.

* * *

## [#](#chat-completions)Chat completions

This API route is shared by chat and image understanding capabilities.

/v1/chat/completions

Create a language model response for a given chat conversation. This endpoint is compatible with the OpenAI API.

## Request body

messages

array

Required

A list of messages that make up the the chat conversation. Different models support different message types, such as image and text.

model

string

Required

Model name for the model to use.

Show optional fields

DefinitionExample

POST

/v1/chat/completions

```
{
  "frequency_penalty": 0,
  "logit_bias": {},
  "logprobs": false,
  "max_tokens": 0,
  "messages": [],
  "model": "",
  "n": 0,
  "presence_penalty": 0,
  "response_format": null,
  "seed": 0,
  "stop": [],
  "stream": false,
  "stream_options": null,
  "temperature": 0,
  "tool_choice": null,
  "tools": [],
  "top_logprobs": 0,
  "top_p": 0,
  "user": ""
}
```

200

Response

```
{
  "choices": [],
  "created": 0,
  "id": "",
  "model": "",
  "object": "",
  "system_fingerprint": "",
  "usage": null
}
```

200400

* * *

## [#](#completions-legacy)Completions (legacy)

Depreciated route in favor of [chat completions](#chat-completions). Offered for backward compatibility.

/v1/completions

Create a language model response for a given prompt. This endpoint is compatible with the OpenAI API.

## Request body

model

string

Required

Specifies the model to be used for the request.

prompt

unknown

Required

Show optional fields

DefinitionExample

POST

/v1/completions

```
{
  "best_of": 0,
  "echo": false,
  "frequency_penalty": 0,
  "logit_bias": {},
  "logprobs": false,
  "max_tokens": 0,
  "model": "",
  "n": 0,
  "presence_penalty": 0,
  "prompt": null,
  "seed": 0,
  "stop": [],
  "stream": false,
  "stream_options": null,
  "suffix": "",
  "temperature": 0,
  "top_p": 0,
  "user": ""
}
```

200

Response

```
{
  "choices": [],
  "created": 0,
  "id": "",
  "model": "",
  "object": "",
  "system_fingerprint": "",
  "usage": null
}
```

200400

Alternatively, an Anthropic compatible endpoint is available.

/v1/complete

Complete endpoint. This endpoint is compatible with the Anthropic API.

## Request body

max\_tokens\_to\_sample

integer

Required

model

string

Required

prompt

string

Required

Show optional fields

DefinitionExample

POST

/v1/complete

```
{
  "max_tokens_to_sample": 0,
  "metadata": null,
  "model": "",
  "prompt": "",
  "stop_sequences": [],
  "stream": false,
  "temperature": 0,
  "top_k": 0,
  "top_p": 0
}
```

200

Response

```
{
  "completion": "",
  "id": "",
  "model": "",
  "stop_reason": "",
  "type": ""
}
```

200400

* * *

## [#](#create-embeddings)Create embeddings

/v1/embeddings

Create an embedding vector representation corresponding to the input text. This endpoint is compatible with the OpenAI API.

## Request body

input

unknown

Required

model

string

Required

ID of the model to use.

Show optional fields

DefinitionExample

POST

/v1/embeddings

```
{
  "dimensions": 0,
  "encoding_format": "",
  "input": null,
  "model": "",
  "preview": false,
  "user": ""
}
```

200

Response

```
{
  "data": [],
  "model": "",
  "object": "",
  "usage": null
}
```

200400

* * *

## [#](#api-key)API key

/v1/api-key

Get information about an API key, including name, status, permissions and users who created or modified this key.

DefinitionExample

GET

/v1/api-key

```
No parameters.
```

200

Response

```
{
  "acls": [],
  "api_key_blocked": false,
  "api_key_disabled": false,
  "api_key_id": "",
  "create_time": "",
  "modified_by": "",
  "modify_time": "",
  "name": "",
  "redacted_api_key": "",
  "team_blocked": false,
  "team_id": "",
  "user_id": ""
}
```

200400

* * *

## [#](#list-models)List models

/v1/models

List all models available with reduced information. This endpoint is compatible with the OpenAI API.

DefinitionExample

GET

/v1/models

```
No parameters.
```

200

Response

```
{
  "data": [],
  "object": ""
}
```

200400

* * *

## [#](#get-model)Get model

/v1/models/{model\_id}

Get the summary of a model with reduced information. This endpoint is compatible with the OpenAI API.

## Path parameters

model\_id

string

ID of the model to get.

DefinitionExample

GET

/v1/models/{model\_id}

```
No parameters.
```

200

Response

```
{
  "created": 0,
  "id": "",
  "object": "",
  "owned_by": ""
}
```

200400404

* * *

## [#](#list-language-models)List language models

/v1/language-models

List all language models available.

DefinitionExample

GET

/v1/language-models

```
No parameters.
```

200

Response

```
{
  "models": []
}
```

200400

* * *

## [#](#get-language-model)Get language model

/v1/language-models/{model\_id}

Get information about a language model using its ID.

## Path parameters

model\_id

string

ID of the model to get.

DefinitionExample

GET

/v1/language-models/{model\_id}

```
No parameters.
```

200

Response

```
{
  "aliases": [],
  "completion_text_token_price": 0,
  "created": 0,
  "fingerprint": "",
  "id": "",
  "input_modalities": [],
  "object": "",
  "output_modalities": [],
  "owned_by": "",
  "prompt_image_token_price": 0,
  "prompt_text_token_price": 0,
  "version": ""
}
```

200400404

* * *

## [#](#list-embedding-models)List embedding models

/v1/embedding-models

List all embedding models available for an API key.

DefinitionExample

GET

/v1/embedding-models

```
No parameters.
```

200

Response

```
{
  "models": []
}
```

200400

* * *

## [#](#get-embedding-model)Get embedding model

/v1/embedding-models/{model\_id}

Embedding model retrieval with full information.

## Path parameters

model\_id

string

ID of the model to get.

DefinitionExample

GET

/v1/embedding-models/{model\_id}

```
No parameters.
```

200

Response

```
{
  "aliases": [],
  "created": 0,
  "fingerprint": "",
  "id": "",
  "input_modalities": [],
  "object": "",
  "owned_by": "",
  "prompt_image_token_price": 0,
  "prompt_text_token_price": 0,
  "version": ""
}
```

200400404
---

---


## URL: https://docs.x.ai/docs/api-reference#list-models

## Title: Welcome to the xAI documentation

Welcome to the xAI documentation

Menu

[Getting Started](https://docs.x.ai/docs/overview)

[Overview](https://docs.x.ai/docs/overview)[Introduction](https://docs.x.ai/docs/introduction)[The Hitchhiker's Guide to Grok](https://docs.x.ai/docs/tutorial)[Models and Pricing](https://docs.x.ai/docs/models)[Usage, Tiers and Rate Limits](https://docs.x.ai/docs/usage-tiers-and-rate-limits)

[Guides](https://docs.x.ai/docs/guides/chat)

[Chat](https://docs.x.ai/docs/guides/chat)[Streaming Response](https://docs.x.ai/docs/guides/streaming-response)[Image Understanding](https://docs.x.ai/docs/guides/image-understanding)[Function Calling](https://docs.x.ai/docs/guides/function-calling)[Structured Outputs](https://docs.x.ai/docs/guides/structured-outputs)[Fingerprint](https://docs.x.ai/docs/guides/fingerprint)[Migration from Other Providers](https://docs.x.ai/docs/guides/migration)

[REST API Reference](https://docs.x.ai/docs/api-reference)

[Chat completions](https://docs.x.ai/docs/api-reference#chat-completions)[Completions (legacy)](https://docs.x.ai/docs/api-reference#completions-legacy)[Create embeddings](https://docs.x.ai/docs/api-reference#create-embeddings)[API Keys](https://docs.x.ai/docs/api-reference#api-key)[List models](https://docs.x.ai/docs/api-reference#list-models)[Get model](https://docs.x.ai/docs/api-reference#get-model)[List language models](https://docs.x.ai/docs/api-reference#list-language-models)[Get language model](https://docs.x.ai/docs/api-reference#get-language-model)[List embedding models](https://docs.x.ai/docs/api-reference#list-embedding-models)[Get embedding model](https://docs.x.ai/docs/api-reference#get-embedding-model)

[

xAI Official Community

](https://discord.gg/x-ai)[

Email xAI Support

](mailto:support@x.ai)

# [#](#rest-api)REST API

The xAI Enterprise API is a robust, high-performance RESTful interface designed for seamless integration into existing systems. It offers advanced AI capabilities with full compatibility with the OpenAI REST API.

The base for all routes is at `https://api.x.ai`.

* * *

## [#](#chat-completions)Chat completions

This API route is shared by chat and image understanding capabilities.

/v1/chat/completions

Create a language model response for a given chat conversation. This endpoint is compatible with the OpenAI API.

## Request body

messages

array

Required

A list of messages that make up the the chat conversation. Different models support different message types, such as image and text.

model

string

Required

Model name for the model to use.

Show optional fields

DefinitionExample

POST

/v1/chat/completions

```
{
  "frequency_penalty": 0,
  "logit_bias": {},
  "logprobs": false,
  "max_tokens": 0,
  "messages": [],
  "model": "",
  "n": 0,
  "presence_penalty": 0,
  "response_format": null,
  "seed": 0,
  "stop": [],
  "stream": false,
  "stream_options": null,
  "temperature": 0,
  "tool_choice": null,
  "tools": [],
  "top_logprobs": 0,
  "top_p": 0,
  "user": ""
}
```

200

Response

```
{
  "choices": [],
  "created": 0,
  "id": "",
  "model": "",
  "object": "",
  "system_fingerprint": "",
  "usage": null
}
```

200400

* * *

## [#](#completions-legacy)Completions (legacy)

Depreciated route in favor of [chat completions](#chat-completions). Offered for backward compatibility.

/v1/completions

Create a language model response for a given prompt. This endpoint is compatible with the OpenAI API.

## Request body

model

string

Required

Specifies the model to be used for the request.

prompt

unknown

Required

Show optional fields

DefinitionExample

POST

/v1/completions

```
{
  "best_of": 0,
  "echo": false,
  "frequency_penalty": 0,
  "logit_bias": {},
  "logprobs": false,
  "max_tokens": 0,
  "model": "",
  "n": 0,
  "presence_penalty": 0,
  "prompt": null,
  "seed": 0,
  "stop": [],
  "stream": false,
  "stream_options": null,
  "suffix": "",
  "temperature": 0,
  "top_p": 0,
  "user": ""
}
```

200

Response

```
{
  "choices": [],
  "created": 0,
  "id": "",
  "model": "",
  "object": "",
  "system_fingerprint": "",
  "usage": null
}
```

200400

Alternatively, an Anthropic compatible endpoint is available.

/v1/complete

Complete endpoint. This endpoint is compatible with the Anthropic API.

## Request body

max\_tokens\_to\_sample

integer

Required

model

string

Required

prompt

string

Required

Show optional fields

DefinitionExample

POST

/v1/complete

```
{
  "max_tokens_to_sample": 0,
  "metadata": null,
  "model": "",
  "prompt": "",
  "stop_sequences": [],
  "stream": false,
  "temperature": 0,
  "top_k": 0,
  "top_p": 0
}
```

200

Response

```
{
  "completion": "",
  "id": "",
  "model": "",
  "stop_reason": "",
  "type": ""
}
```

200400

* * *

## [#](#create-embeddings)Create embeddings

/v1/embeddings

Create an embedding vector representation corresponding to the input text. This endpoint is compatible with the OpenAI API.

## Request body

input

unknown

Required

model

string

Required

ID of the model to use.

Show optional fields

DefinitionExample

POST

/v1/embeddings

```
{
  "dimensions": 0,
  "encoding_format": "",
  "input": null,
  "model": "",
  "preview": false,
  "user": ""
}
```

200

Response

```
{
  "data": [],
  "model": "",
  "object": "",
  "usage": null
}
```

200400

* * *

## [#](#api-key)API key

/v1/api-key

Get information about an API key, including name, status, permissions and users who created or modified this key.

DefinitionExample

GET

/v1/api-key

```
No parameters.
```

200

Response

```
{
  "acls": [],
  "api_key_blocked": false,
  "api_key_disabled": false,
  "api_key_id": "",
  "create_time": "",
  "modified_by": "",
  "modify_time": "",
  "name": "",
  "redacted_api_key": "",
  "team_blocked": false,
  "team_id": "",
  "user_id": ""
}
```

200400

* * *

## [#](#list-models)List models

/v1/models

List all models available with reduced information. This endpoint is compatible with the OpenAI API.

DefinitionExample

GET

/v1/models

```
No parameters.
```

200

Response

```
{
  "data": [],
  "object": ""
}
```

200400

* * *

## [#](#get-model)Get model

/v1/models/{model\_id}

Get the summary of a model with reduced information. This endpoint is compatible with the OpenAI API.

## Path parameters

model\_id

string

ID of the model to get.

DefinitionExample

GET

/v1/models/{model\_id}

```
No parameters.
```

200

Response

```
{
  "created": 0,
  "id": "",
  "object": "",
  "owned_by": ""
}
```

200400404

* * *

## [#](#list-language-models)List language models

/v1/language-models

List all language models available.

DefinitionExample

GET

/v1/language-models

```
No parameters.
```

200

Response

```
{
  "models": []
}
```

200400

* * *

## [#](#get-language-model)Get language model

/v1/language-models/{model\_id}

Get information about a language model using its ID.

## Path parameters

model\_id

string

ID of the model to get.

DefinitionExample

GET

/v1/language-models/{model\_id}

```
No parameters.
```

200

Response

```
{
  "aliases": [],
  "completion_text_token_price": 0,
  "created": 0,
  "fingerprint": "",
  "id": "",
  "input_modalities": [],
  "object": "",
  "output_modalities": [],
  "owned_by": "",
  "prompt_image_token_price": 0,
  "prompt_text_token_price": 0,
  "version": ""
}
```

200400404

* * *

## [#](#list-embedding-models)List embedding models

/v1/embedding-models

List all embedding models available for an API key.

DefinitionExample

GET

/v1/embedding-models

```
No parameters.
```

200

Response

```
{
  "models": []
}
```

200400

* * *

## [#](#get-embedding-model)Get embedding model

/v1/embedding-models/{model\_id}

Embedding model retrieval with full information.

## Path parameters

model\_id

string

ID of the model to get.

DefinitionExample

GET

/v1/embedding-models/{model\_id}

```
No parameters.
```

200

Response

```
{
  "aliases": [],
  "created": 0,
  "fingerprint": "",
  "id": "",
  "input_modalities": [],
  "object": "",
  "owned_by": "",
  "prompt_image_token_price": 0,
  "prompt_text_token_price": 0,
  "version": ""
}
```

200400404
---

---


## URL: https://docs.x.ai/docs/api-reference#get-model

## Title: Welcome to the xAI documentation

Welcome to the xAI documentation

Menu

[Getting Started](https://docs.x.ai/docs/overview)

[Overview](https://docs.x.ai/docs/overview)[Introduction](https://docs.x.ai/docs/introduction)[The Hitchhiker's Guide to Grok](https://docs.x.ai/docs/tutorial)[Models and Pricing](https://docs.x.ai/docs/models)[Usage, Tiers and Rate Limits](https://docs.x.ai/docs/usage-tiers-and-rate-limits)

[Guides](https://docs.x.ai/docs/guides/chat)

[Chat](https://docs.x.ai/docs/guides/chat)[Streaming Response](https://docs.x.ai/docs/guides/streaming-response)[Image Understanding](https://docs.x.ai/docs/guides/image-understanding)[Function Calling](https://docs.x.ai/docs/guides/function-calling)[Structured Outputs](https://docs.x.ai/docs/guides/structured-outputs)[Fingerprint](https://docs.x.ai/docs/guides/fingerprint)[Migration from Other Providers](https://docs.x.ai/docs/guides/migration)

[REST API Reference](https://docs.x.ai/docs/api-reference)

[Chat completions](https://docs.x.ai/docs/api-reference#chat-completions)[Completions (legacy)](https://docs.x.ai/docs/api-reference#completions-legacy)[Create embeddings](https://docs.x.ai/docs/api-reference#create-embeddings)[API Keys](https://docs.x.ai/docs/api-reference#api-key)[List models](https://docs.x.ai/docs/api-reference#list-models)[Get model](https://docs.x.ai/docs/api-reference#get-model)[List language models](https://docs.x.ai/docs/api-reference#list-language-models)[Get language model](https://docs.x.ai/docs/api-reference#get-language-model)[List embedding models](https://docs.x.ai/docs/api-reference#list-embedding-models)[Get embedding model](https://docs.x.ai/docs/api-reference#get-embedding-model)

[

xAI Official Community

](https://discord.gg/x-ai)[

Email xAI Support

](mailto:support@x.ai)

# [#](#rest-api)REST API

The xAI Enterprise API is a robust, high-performance RESTful interface designed for seamless integration into existing systems. It offers advanced AI capabilities with full compatibility with the OpenAI REST API.

The base for all routes is at `https://api.x.ai`.

* * *

## [#](#chat-completions)Chat completions

This API route is shared by chat and image understanding capabilities.

/v1/chat/completions

Create a language model response for a given chat conversation. This endpoint is compatible with the OpenAI API.

## Request body

messages

array

Required

A list of messages that make up the the chat conversation. Different models support different message types, such as image and text.

model

string

Required

Model name for the model to use.

Show optional fields

DefinitionExample

POST

/v1/chat/completions

```
{
  "frequency_penalty": 0,
  "logit_bias": {},
  "logprobs": false,
  "max_tokens": 0,
  "messages": [],
  "model": "",
  "n": 0,
  "presence_penalty": 0,
  "response_format": null,
  "seed": 0,
  "stop": [],
  "stream": false,
  "stream_options": null,
  "temperature": 0,
  "tool_choice": null,
  "tools": [],
  "top_logprobs": 0,
  "top_p": 0,
  "user": ""
}
```

200

Response

```
{
  "choices": [],
  "created": 0,
  "id": "",
  "model": "",
  "object": "",
  "system_fingerprint": "",
  "usage": null
}
```

200400

* * *

## [#](#completions-legacy)Completions (legacy)

Depreciated route in favor of [chat completions](#chat-completions). Offered for backward compatibility.

/v1/completions

Create a language model response for a given prompt. This endpoint is compatible with the OpenAI API.

## Request body

model

string

Required

Specifies the model to be used for the request.

prompt

unknown

Required

Show optional fields

DefinitionExample

POST

/v1/completions

```
{
  "best_of": 0,
  "echo": false,
  "frequency_penalty": 0,
  "logit_bias": {},
  "logprobs": false,
  "max_tokens": 0,
  "model": "",
  "n": 0,
  "presence_penalty": 0,
  "prompt": null,
  "seed": 0,
  "stop": [],
  "stream": false,
  "stream_options": null,
  "suffix": "",
  "temperature": 0,
  "top_p": 0,
  "user": ""
}
```

200

Response

```
{
  "choices": [],
  "created": 0,
  "id": "",
  "model": "",
  "object": "",
  "system_fingerprint": "",
  "usage": null
}
```

200400

Alternatively, an Anthropic compatible endpoint is available.

/v1/complete

Complete endpoint. This endpoint is compatible with the Anthropic API.

## Request body

max\_tokens\_to\_sample

integer

Required

model

string

Required

prompt

string

Required

Show optional fields

DefinitionExample

POST

/v1/complete

```
{
  "max_tokens_to_sample": 0,
  "metadata": null,
  "model": "",
  "prompt": "",
  "stop_sequences": [],
  "stream": false,
  "temperature": 0,
  "top_k": 0,
  "top_p": 0
}
```

200

Response

```
{
  "completion": "",
  "id": "",
  "model": "",
  "stop_reason": "",
  "type": ""
}
```

200400

* * *

## [#](#create-embeddings)Create embeddings

/v1/embeddings

Create an embedding vector representation corresponding to the input text. This endpoint is compatible with the OpenAI API.

## Request body

input

unknown

Required

model

string

Required

ID of the model to use.

Show optional fields

DefinitionExample

POST

/v1/embeddings

```
{
  "dimensions": 0,
  "encoding_format": "",
  "input": null,
  "model": "",
  "preview": false,
  "user": ""
}
```

200

Response

```
{
  "data": [],
  "model": "",
  "object": "",
  "usage": null
}
```

200400

* * *

## [#](#api-key)API key

/v1/api-key

Get information about an API key, including name, status, permissions and users who created or modified this key.

DefinitionExample

GET

/v1/api-key

```
No parameters.
```

200

Response

```
{
  "acls": [],
  "api_key_blocked": false,
  "api_key_disabled": false,
  "api_key_id": "",
  "create_time": "",
  "modified_by": "",
  "modify_time": "",
  "name": "",
  "redacted_api_key": "",
  "team_blocked": false,
  "team_id": "",
  "user_id": ""
}
```

200400

* * *

## [#](#list-models)List models

/v1/models

List all models available with reduced information. This endpoint is compatible with the OpenAI API.

DefinitionExample

GET

/v1/models

```
No parameters.
```

200

Response

```
{
  "data": [],
  "object": ""
}
```

200400

* * *

## [#](#get-model)Get model

/v1/models/{model\_id}

Get the summary of a model with reduced information. This endpoint is compatible with the OpenAI API.

## Path parameters

model\_id

string

ID of the model to get.

DefinitionExample

GET

/v1/models/{model\_id}

```
No parameters.
```

200

Response

```
{
  "created": 0,
  "id": "",
  "object": "",
  "owned_by": ""
}
```

200400404

* * *

## [#](#list-language-models)List language models

/v1/language-models

List all language models available.

DefinitionExample

GET

/v1/language-models

```
No parameters.
```

200

Response

```
{
  "models": []
}
```

200400

* * *

## [#](#get-language-model)Get language model

/v1/language-models/{model\_id}

Get information about a language model using its ID.

## Path parameters

model\_id

string

ID of the model to get.

DefinitionExample

GET

/v1/language-models/{model\_id}

```
No parameters.
```

200

Response

```
{
  "aliases": [],
  "completion_text_token_price": 0,
  "created": 0,
  "fingerprint": "",
  "id": "",
  "input_modalities": [],
  "object": "",
  "output_modalities": [],
  "owned_by": "",
  "prompt_image_token_price": 0,
  "prompt_text_token_price": 0,
  "version": ""
}
```

200400404

* * *

## [#](#list-embedding-models)List embedding models

/v1/embedding-models

List all embedding models available for an API key.

DefinitionExample

GET

/v1/embedding-models

```
No parameters.
```

200

Response

```
{
  "models": []
}
```

200400

* * *

## [#](#get-embedding-model)Get embedding model

/v1/embedding-models/{model\_id}

Embedding model retrieval with full information.

## Path parameters

model\_id

string

ID of the model to get.

DefinitionExample

GET

/v1/embedding-models/{model\_id}

```
No parameters.
```

200

Response

```
{
  "aliases": [],
  "created": 0,
  "fingerprint": "",
  "id": "",
  "input_modalities": [],
  "object": "",
  "owned_by": "",
  "prompt_image_token_price": 0,
  "prompt_text_token_price": 0,
  "version": ""
}
```

200400404
---

---


## URL: https://docs.x.ai/docs/api-reference#list-language-models

## Title: Welcome to the xAI documentation

Welcome to the xAI documentation

Menu

[Getting Started](https://docs.x.ai/docs/overview)

[Overview](https://docs.x.ai/docs/overview)[Introduction](https://docs.x.ai/docs/introduction)[The Hitchhiker's Guide to Grok](https://docs.x.ai/docs/tutorial)[Models and Pricing](https://docs.x.ai/docs/models)[Usage, Tiers and Rate Limits](https://docs.x.ai/docs/usage-tiers-and-rate-limits)

[Guides](https://docs.x.ai/docs/guides/chat)

[Chat](https://docs.x.ai/docs/guides/chat)[Streaming Response](https://docs.x.ai/docs/guides/streaming-response)[Image Understanding](https://docs.x.ai/docs/guides/image-understanding)[Function Calling](https://docs.x.ai/docs/guides/function-calling)[Structured Outputs](https://docs.x.ai/docs/guides/structured-outputs)[Fingerprint](https://docs.x.ai/docs/guides/fingerprint)[Migration from Other Providers](https://docs.x.ai/docs/guides/migration)

[REST API Reference](https://docs.x.ai/docs/api-reference)

[Chat completions](https://docs.x.ai/docs/api-reference#chat-completions)[Completions (legacy)](https://docs.x.ai/docs/api-reference#completions-legacy)[Create embeddings](https://docs.x.ai/docs/api-reference#create-embeddings)[API Keys](https://docs.x.ai/docs/api-reference#api-key)[List models](https://docs.x.ai/docs/api-reference#list-models)[Get model](https://docs.x.ai/docs/api-reference#get-model)[List language models](https://docs.x.ai/docs/api-reference#list-language-models)[Get language model](https://docs.x.ai/docs/api-reference#get-language-model)[List embedding models](https://docs.x.ai/docs/api-reference#list-embedding-models)[Get embedding model](https://docs.x.ai/docs/api-reference#get-embedding-model)

[

xAI Official Community

](https://discord.gg/x-ai)[

Email xAI Support

](mailto:support@x.ai)

# [#](#rest-api)REST API

The xAI Enterprise API is a robust, high-performance RESTful interface designed for seamless integration into existing systems. It offers advanced AI capabilities with full compatibility with the OpenAI REST API.

The base for all routes is at `https://api.x.ai`.

* * *

## [#](#chat-completions)Chat completions

This API route is shared by chat and image understanding capabilities.

/v1/chat/completions

Create a language model response for a given chat conversation. This endpoint is compatible with the OpenAI API.

## Request body

messages

array

Required

A list of messages that make up the the chat conversation. Different models support different message types, such as image and text.

model

string

Required

Model name for the model to use.

Show optional fields

DefinitionExample

POST

/v1/chat/completions

```
{
  "frequency_penalty": 0,
  "logit_bias": {},
  "logprobs": false,
  "max_tokens": 0,
  "messages": [],
  "model": "",
  "n": 0,
  "presence_penalty": 0,
  "response_format": null,
  "seed": 0,
  "stop": [],
  "stream": false,
  "stream_options": null,
  "temperature": 0,
  "tool_choice": null,
  "tools": [],
  "top_logprobs": 0,
  "top_p": 0,
  "user": ""
}
```

200

Response

```
{
  "choices": [],
  "created": 0,
  "id": "",
  "model": "",
  "object": "",
  "system_fingerprint": "",
  "usage": null
}
```

200400

* * *

## [#](#completions-legacy)Completions (legacy)

Depreciated route in favor of [chat completions](#chat-completions). Offered for backward compatibility.

/v1/completions

Create a language model response for a given prompt. This endpoint is compatible with the OpenAI API.

## Request body

model

string

Required

Specifies the model to be used for the request.

prompt

unknown

Required

Show optional fields

DefinitionExample

POST

/v1/completions

```
{
  "best_of": 0,
  "echo": false,
  "frequency_penalty": 0,
  "logit_bias": {},
  "logprobs": false,
  "max_tokens": 0,
  "model": "",
  "n": 0,
  "presence_penalty": 0,
  "prompt": null,
  "seed": 0,
  "stop": [],
  "stream": false,
  "stream_options": null,
  "suffix": "",
  "temperature": 0,
  "top_p": 0,
  "user": ""
}
```

200

Response

```
{
  "choices": [],
  "created": 0,
  "id": "",
  "model": "",
  "object": "",
  "system_fingerprint": "",
  "usage": null
}
```

200400

Alternatively, an Anthropic compatible endpoint is available.

/v1/complete

Complete endpoint. This endpoint is compatible with the Anthropic API.

## Request body

max\_tokens\_to\_sample

integer

Required

model

string

Required

prompt

string

Required

Show optional fields

DefinitionExample

POST

/v1/complete

```
{
  "max_tokens_to_sample": 0,
  "metadata": null,
  "model": "",
  "prompt": "",
  "stop_sequences": [],
  "stream": false,
  "temperature": 0,
  "top_k": 0,
  "top_p": 0
}
```

200

Response

```
{
  "completion": "",
  "id": "",
  "model": "",
  "stop_reason": "",
  "type": ""
}
```

200400

* * *

## [#](#create-embeddings)Create embeddings

/v1/embeddings

Create an embedding vector representation corresponding to the input text. This endpoint is compatible with the OpenAI API.

## Request body

input

unknown

Required

model

string

Required

ID of the model to use.

Show optional fields

DefinitionExample

POST

/v1/embeddings

```
{
  "dimensions": 0,
  "encoding_format": "",
  "input": null,
  "model": "",
  "preview": false,
  "user": ""
}
```

200

Response

```
{
  "data": [],
  "model": "",
  "object": "",
  "usage": null
}
```

200400

* * *

## [#](#api-key)API key

/v1/api-key

Get information about an API key, including name, status, permissions and users who created or modified this key.

DefinitionExample

GET

/v1/api-key

```
No parameters.
```

200

Response

```
{
  "acls": [],
  "api_key_blocked": false,
  "api_key_disabled": false,
  "api_key_id": "",
  "create_time": "",
  "modified_by": "",
  "modify_time": "",
  "name": "",
  "redacted_api_key": "",
  "team_blocked": false,
  "team_id": "",
  "user_id": ""
}
```

200400

* * *

## [#](#list-models)List models

/v1/models

List all models available with reduced information. This endpoint is compatible with the OpenAI API.

DefinitionExample

GET

/v1/models

```
No parameters.
```

200

Response

```
{
  "data": [],
  "object": ""
}
```

200400

* * *

## [#](#get-model)Get model

/v1/models/{model\_id}

Get the summary of a model with reduced information. This endpoint is compatible with the OpenAI API.

## Path parameters

model\_id

string

ID of the model to get.

DefinitionExample

GET

/v1/models/{model\_id}

```
No parameters.
```

200

Response

```
{
  "created": 0,
  "id": "",
  "object": "",
  "owned_by": ""
}
```

200400404

* * *

## [#](#list-language-models)List language models

/v1/language-models

List all language models available.

DefinitionExample

GET

/v1/language-models

```
No parameters.
```

200

Response

```
{
  "models": []
}
```

200400

* * *

## [#](#get-language-model)Get language model

/v1/language-models/{model\_id}

Get information about a language model using its ID.

## Path parameters

model\_id

string

ID of the model to get.

DefinitionExample

GET

/v1/language-models/{model\_id}

```
No parameters.
```

200

Response

```
{
  "aliases": [],
  "completion_text_token_price": 0,
  "created": 0,
  "fingerprint": "",
  "id": "",
  "input_modalities": [],
  "object": "",
  "output_modalities": [],
  "owned_by": "",
  "prompt_image_token_price": 0,
  "prompt_text_token_price": 0,
  "version": ""
}
```

200400404

* * *

## [#](#list-embedding-models)List embedding models

/v1/embedding-models

List all embedding models available for an API key.

DefinitionExample

GET

/v1/embedding-models

```
No parameters.
```

200

Response

```
{
  "models": []
}
```

200400

* * *

## [#](#get-embedding-model)Get embedding model

/v1/embedding-models/{model\_id}

Embedding model retrieval with full information.

## Path parameters

model\_id

string

ID of the model to get.

DefinitionExample

GET

/v1/embedding-models/{model\_id}

```
No parameters.
```

200

Response

```
{
  "aliases": [],
  "created": 0,
  "fingerprint": "",
  "id": "",
  "input_modalities": [],
  "object": "",
  "owned_by": "",
  "prompt_image_token_price": 0,
  "prompt_text_token_price": 0,
  "version": ""
}
```

200400404
---

---


## URL: https://docs.x.ai/docs/api-reference#get-language-model

## Title: Welcome to the xAI documentation

Welcome to the xAI documentation

Menu

[Getting Started](https://docs.x.ai/docs/overview)

[Overview](https://docs.x.ai/docs/overview)[Introduction](https://docs.x.ai/docs/introduction)[The Hitchhiker's Guide to Grok](https://docs.x.ai/docs/tutorial)[Models and Pricing](https://docs.x.ai/docs/models)[Usage, Tiers and Rate Limits](https://docs.x.ai/docs/usage-tiers-and-rate-limits)

[Guides](https://docs.x.ai/docs/guides/chat)

[Chat](https://docs.x.ai/docs/guides/chat)[Streaming Response](https://docs.x.ai/docs/guides/streaming-response)[Image Understanding](https://docs.x.ai/docs/guides/image-understanding)[Function Calling](https://docs.x.ai/docs/guides/function-calling)[Structured Outputs](https://docs.x.ai/docs/guides/structured-outputs)[Fingerprint](https://docs.x.ai/docs/guides/fingerprint)[Migration from Other Providers](https://docs.x.ai/docs/guides/migration)

[REST API Reference](https://docs.x.ai/docs/api-reference)

[Chat completions](https://docs.x.ai/docs/api-reference#chat-completions)[Completions (legacy)](https://docs.x.ai/docs/api-reference#completions-legacy)[Create embeddings](https://docs.x.ai/docs/api-reference#create-embeddings)[API Keys](https://docs.x.ai/docs/api-reference#api-key)[List models](https://docs.x.ai/docs/api-reference#list-models)[Get model](https://docs.x.ai/docs/api-reference#get-model)[List language models](https://docs.x.ai/docs/api-reference#list-language-models)[Get language model](https://docs.x.ai/docs/api-reference#get-language-model)[List embedding models](https://docs.x.ai/docs/api-reference#list-embedding-models)[Get embedding model](https://docs.x.ai/docs/api-reference#get-embedding-model)

[

xAI Official Community

](https://discord.gg/x-ai)[

Email xAI Support

](mailto:support@x.ai)

# [#](#rest-api)REST API

The xAI Enterprise API is a robust, high-performance RESTful interface designed for seamless integration into existing systems. It offers advanced AI capabilities with full compatibility with the OpenAI REST API.

The base for all routes is at `https://api.x.ai`.

* * *

## [#](#chat-completions)Chat completions

This API route is shared by chat and image understanding capabilities.

/v1/chat/completions

Create a language model response for a given chat conversation. This endpoint is compatible with the OpenAI API.

## Request body

messages

array

Required

A list of messages that make up the the chat conversation. Different models support different message types, such as image and text.

model

string

Required

Model name for the model to use.

Show optional fields

DefinitionExample

POST

/v1/chat/completions

```
{
  "frequency_penalty": 0,
  "logit_bias": {},
  "logprobs": false,
  "max_tokens": 0,
  "messages": [],
  "model": "",
  "n": 0,
  "presence_penalty": 0,
  "response_format": null,
  "seed": 0,
  "stop": [],
  "stream": false,
  "stream_options": null,
  "temperature": 0,
  "tool_choice": null,
  "tools": [],
  "top_logprobs": 0,
  "top_p": 0,
  "user": ""
}
```

200

Response

```
{
  "choices": [],
  "created": 0,
  "id": "",
  "model": "",
  "object": "",
  "system_fingerprint": "",
  "usage": null
}
```

200400

* * *

## [#](#completions-legacy)Completions (legacy)

Depreciated route in favor of [chat completions](#chat-completions). Offered for backward compatibility.

/v1/completions

Create a language model response for a given prompt. This endpoint is compatible with the OpenAI API.

## Request body

model

string

Required

Specifies the model to be used for the request.

prompt

unknown

Required

Show optional fields

DefinitionExample

POST

/v1/completions

```
{
  "best_of": 0,
  "echo": false,
  "frequency_penalty": 0,
  "logit_bias": {},
  "logprobs": false,
  "max_tokens": 0,
  "model": "",
  "n": 0,
  "presence_penalty": 0,
  "prompt": null,
  "seed": 0,
  "stop": [],
  "stream": false,
  "stream_options": null,
  "suffix": "",
  "temperature": 0,
  "top_p": 0,
  "user": ""
}
```

200

Response

```
{
  "choices": [],
  "created": 0,
  "id": "",
  "model": "",
  "object": "",
  "system_fingerprint": "",
  "usage": null
}
```

200400

Alternatively, an Anthropic compatible endpoint is available.

/v1/complete

Complete endpoint. This endpoint is compatible with the Anthropic API.

## Request body

max\_tokens\_to\_sample

integer

Required

model

string

Required

prompt

string

Required

Show optional fields

DefinitionExample

POST

/v1/complete

```
{
  "max_tokens_to_sample": 0,
  "metadata": null,
  "model": "",
  "prompt": "",
  "stop_sequences": [],
  "stream": false,
  "temperature": 0,
  "top_k": 0,
  "top_p": 0
}
```

200

Response

```
{
  "completion": "",
  "id": "",
  "model": "",
  "stop_reason": "",
  "type": ""
}
```

200400

* * *

## [#](#create-embeddings)Create embeddings

/v1/embeddings

Create an embedding vector representation corresponding to the input text. This endpoint is compatible with the OpenAI API.

## Request body

input

unknown

Required

model

string

Required

ID of the model to use.

Show optional fields

DefinitionExample

POST

/v1/embeddings

```
{
  "dimensions": 0,
  "encoding_format": "",
  "input": null,
  "model": "",
  "preview": false,
  "user": ""
}
```

200

Response

```
{
  "data": [],
  "model": "",
  "object": "",
  "usage": null
}
```

200400

* * *

## [#](#api-key)API key

/v1/api-key

Get information about an API key, including name, status, permissions and users who created or modified this key.

DefinitionExample

GET

/v1/api-key

```
No parameters.
```

200

Response

```
{
  "acls": [],
  "api_key_blocked": false,
  "api_key_disabled": false,
  "api_key_id": "",
  "create_time": "",
  "modified_by": "",
  "modify_time": "",
  "name": "",
  "redacted_api_key": "",
  "team_blocked": false,
  "team_id": "",
  "user_id": ""
}
```

200400

* * *

## [#](#list-models)List models

/v1/models

List all models available with reduced information. This endpoint is compatible with the OpenAI API.

DefinitionExample

GET

/v1/models

```
No parameters.
```

200

Response

```
{
  "data": [],
  "object": ""
}
```

200400

* * *

## [#](#get-model)Get model

/v1/models/{model\_id}

Get the summary of a model with reduced information. This endpoint is compatible with the OpenAI API.

## Path parameters

model\_id

string

ID of the model to get.

DefinitionExample

GET

/v1/models/{model\_id}

```
No parameters.
```

200

Response

```
{
  "created": 0,
  "id": "",
  "object": "",
  "owned_by": ""
}
```

200400404

* * *

## [#](#list-language-models)List language models

/v1/language-models

List all language models available.

DefinitionExample

GET

/v1/language-models

```
No parameters.
```

200

Response

```
{
  "models": []
}
```

200400

* * *

## [#](#get-language-model)Get language model

/v1/language-models/{model\_id}

Get information about a language model using its ID.

## Path parameters

model\_id

string

ID of the model to get.

DefinitionExample

GET

/v1/language-models/{model\_id}

```
No parameters.
```

200

Response

```
{
  "aliases": [],
  "completion_text_token_price": 0,
  "created": 0,
  "fingerprint": "",
  "id": "",
  "input_modalities": [],
  "object": "",
  "output_modalities": [],
  "owned_by": "",
  "prompt_image_token_price": 0,
  "prompt_text_token_price": 0,
  "version": ""
}
```

200400404

* * *

## [#](#list-embedding-models)List embedding models

/v1/embedding-models

List all embedding models available for an API key.

DefinitionExample

GET

/v1/embedding-models

```
No parameters.
```

200

Response

```
{
  "models": []
}
```

200400

* * *

## [#](#get-embedding-model)Get embedding model

/v1/embedding-models/{model\_id}

Embedding model retrieval with full information.

## Path parameters

model\_id

string

ID of the model to get.

DefinitionExample

GET

/v1/embedding-models/{model\_id}

```
No parameters.
```

200

Response

```
{
  "aliases": [],
  "created": 0,
  "fingerprint": "",
  "id": "",
  "input_modalities": [],
  "object": "",
  "owned_by": "",
  "prompt_image_token_price": 0,
  "prompt_text_token_price": 0,
  "version": ""
}
```

200400404
---

---


## URL: https://docs.x.ai/docs/api-reference#list-embedding-models

## Title: Welcome to the xAI documentation

Welcome to the xAI documentation

Menu

[Getting Started](https://docs.x.ai/docs/overview)

[Overview](https://docs.x.ai/docs/overview)[Introduction](https://docs.x.ai/docs/introduction)[The Hitchhiker's Guide to Grok](https://docs.x.ai/docs/tutorial)[Models and Pricing](https://docs.x.ai/docs/models)[Usage, Tiers and Rate Limits](https://docs.x.ai/docs/usage-tiers-and-rate-limits)

[Guides](https://docs.x.ai/docs/guides/chat)

[Chat](https://docs.x.ai/docs/guides/chat)[Streaming Response](https://docs.x.ai/docs/guides/streaming-response)[Image Understanding](https://docs.x.ai/docs/guides/image-understanding)[Function Calling](https://docs.x.ai/docs/guides/function-calling)[Structured Outputs](https://docs.x.ai/docs/guides/structured-outputs)[Fingerprint](https://docs.x.ai/docs/guides/fingerprint)[Migration from Other Providers](https://docs.x.ai/docs/guides/migration)

[REST API Reference](https://docs.x.ai/docs/api-reference)

[Chat completions](https://docs.x.ai/docs/api-reference#chat-completions)[Completions (legacy)](https://docs.x.ai/docs/api-reference#completions-legacy)[Create embeddings](https://docs.x.ai/docs/api-reference#create-embeddings)[API Keys](https://docs.x.ai/docs/api-reference#api-key)[List models](https://docs.x.ai/docs/api-reference#list-models)[Get model](https://docs.x.ai/docs/api-reference#get-model)[List language models](https://docs.x.ai/docs/api-reference#list-language-models)[Get language model](https://docs.x.ai/docs/api-reference#get-language-model)[List embedding models](https://docs.x.ai/docs/api-reference#list-embedding-models)[Get embedding model](https://docs.x.ai/docs/api-reference#get-embedding-model)

[

xAI Official Community

](https://discord.gg/x-ai)[

Email xAI Support

](mailto:support@x.ai)

# [#](#rest-api)REST API

The xAI Enterprise API is a robust, high-performance RESTful interface designed for seamless integration into existing systems. It offers advanced AI capabilities with full compatibility with the OpenAI REST API.

The base for all routes is at `https://api.x.ai`.

* * *

## [#](#chat-completions)Chat completions

This API route is shared by chat and image understanding capabilities.

/v1/chat/completions

Create a language model response for a given chat conversation. This endpoint is compatible with the OpenAI API.

## Request body

messages

array

Required

A list of messages that make up the the chat conversation. Different models support different message types, such as image and text.

model

string

Required

Model name for the model to use.

Show optional fields

DefinitionExample

POST

/v1/chat/completions

```
{
  "frequency_penalty": 0,
  "logit_bias": {},
  "logprobs": false,
  "max_tokens": 0,
  "messages": [],
  "model": "",
  "n": 0,
  "presence_penalty": 0,
  "response_format": null,
  "seed": 0,
  "stop": [],
  "stream": false,
  "stream_options": null,
  "temperature": 0,
  "tool_choice": null,
  "tools": [],
  "top_logprobs": 0,
  "top_p": 0,
  "user": ""
}
```

200

Response

```
{
  "choices": [],
  "created": 0,
  "id": "",
  "model": "",
  "object": "",
  "system_fingerprint": "",
  "usage": null
}
```

200400

* * *

## [#](#completions-legacy)Completions (legacy)

Depreciated route in favor of [chat completions](#chat-completions). Offered for backward compatibility.

/v1/completions

Create a language model response for a given prompt. This endpoint is compatible with the OpenAI API.

## Request body

model

string

Required

Specifies the model to be used for the request.

prompt

unknown

Required

Show optional fields

DefinitionExample

POST

/v1/completions

```
{
  "best_of": 0,
  "echo": false,
  "frequency_penalty": 0,
  "logit_bias": {},
  "logprobs": false,
  "max_tokens": 0,
  "model": "",
  "n": 0,
  "presence_penalty": 0,
  "prompt": null,
  "seed": 0,
  "stop": [],
  "stream": false,
  "stream_options": null,
  "suffix": "",
  "temperature": 0,
  "top_p": 0,
  "user": ""
}
```

200

Response

```
{
  "choices": [],
  "created": 0,
  "id": "",
  "model": "",
  "object": "",
  "system_fingerprint": "",
  "usage": null
}
```

200400

Alternatively, an Anthropic compatible endpoint is available.

/v1/complete

Complete endpoint. This endpoint is compatible with the Anthropic API.

## Request body

max\_tokens\_to\_sample

integer

Required

model

string

Required

prompt

string

Required

Show optional fields

DefinitionExample

POST

/v1/complete

```
{
  "max_tokens_to_sample": 0,
  "metadata": null,
  "model": "",
  "prompt": "",
  "stop_sequences": [],
  "stream": false,
  "temperature": 0,
  "top_k": 0,
  "top_p": 0
}
```

200

Response

```
{
  "completion": "",
  "id": "",
  "model": "",
  "stop_reason": "",
  "type": ""
}
```

200400

* * *

## [#](#create-embeddings)Create embeddings

/v1/embeddings

Create an embedding vector representation corresponding to the input text. This endpoint is compatible with the OpenAI API.

## Request body

input

unknown

Required

model

string

Required

ID of the model to use.

Show optional fields

DefinitionExample

POST

/v1/embeddings

```
{
  "dimensions": 0,
  "encoding_format": "",
  "input": null,
  "model": "",
  "preview": false,
  "user": ""
}
```

200

Response

```
{
  "data": [],
  "model": "",
  "object": "",
  "usage": null
}
```

200400

* * *

## [#](#api-key)API key

/v1/api-key

Get information about an API key, including name, status, permissions and users who created or modified this key.

DefinitionExample

GET

/v1/api-key

```
No parameters.
```

200

Response

```
{
  "acls": [],
  "api_key_blocked": false,
  "api_key_disabled": false,
  "api_key_id": "",
  "create_time": "",
  "modified_by": "",
  "modify_time": "",
  "name": "",
  "redacted_api_key": "",
  "team_blocked": false,
  "team_id": "",
  "user_id": ""
}
```

200400

* * *

## [#](#list-models)List models

/v1/models

List all models available with reduced information. This endpoint is compatible with the OpenAI API.

DefinitionExample

GET

/v1/models

```
No parameters.
```

200

Response

```
{
  "data": [],
  "object": ""
}
```

200400

* * *

## [#](#get-model)Get model

/v1/models/{model\_id}

Get the summary of a model with reduced information. This endpoint is compatible with the OpenAI API.

## Path parameters

model\_id

string

ID of the model to get.

DefinitionExample

GET

/v1/models/{model\_id}

```
No parameters.
```

200

Response

```
{
  "created": 0,
  "id": "",
  "object": "",
  "owned_by": ""
}
```

200400404

* * *

## [#](#list-language-models)List language models

/v1/language-models

List all language models available.

DefinitionExample

GET

/v1/language-models

```
No parameters.
```

200

Response

```
{
  "models": []
}
```

200400

* * *

## [#](#get-language-model)Get language model

/v1/language-models/{model\_id}

Get information about a language model using its ID.

## Path parameters

model\_id

string

ID of the model to get.

DefinitionExample

GET

/v1/language-models/{model\_id}

```
No parameters.
```

200

Response

```
{
  "aliases": [],
  "completion_text_token_price": 0,
  "created": 0,
  "fingerprint": "",
  "id": "",
  "input_modalities": [],
  "object": "",
  "output_modalities": [],
  "owned_by": "",
  "prompt_image_token_price": 0,
  "prompt_text_token_price": 0,
  "version": ""
}
```

200400404

* * *

## [#](#list-embedding-models)List embedding models

/v1/embedding-models

List all embedding models available for an API key.

DefinitionExample

GET

/v1/embedding-models

```
No parameters.
```

200

Response

```
{
  "models": []
}
```

200400

* * *

## [#](#get-embedding-model)Get embedding model

/v1/embedding-models/{model\_id}

Embedding model retrieval with full information.

## Path parameters

model\_id

string

ID of the model to get.

DefinitionExample

GET

/v1/embedding-models/{model\_id}

```
No parameters.
```

200

Response

```
{
  "aliases": [],
  "created": 0,
  "fingerprint": "",
  "id": "",
  "input_modalities": [],
  "object": "",
  "owned_by": "",
  "prompt_image_token_price": 0,
  "prompt_text_token_price": 0,
  "version": ""
}
```

200400404
---

---


## URL: https://docs.x.ai/docs/api-reference#get-embedding-model

## Title: Welcome to the xAI documentation

Welcome to the xAI documentation

Menu

[Getting Started](https://docs.x.ai/docs/overview)

[Overview](https://docs.x.ai/docs/overview)[Introduction](https://docs.x.ai/docs/introduction)[The Hitchhiker's Guide to Grok](https://docs.x.ai/docs/tutorial)[Models and Pricing](https://docs.x.ai/docs/models)[Usage, Tiers and Rate Limits](https://docs.x.ai/docs/usage-tiers-and-rate-limits)

[Guides](https://docs.x.ai/docs/guides/chat)

[Chat](https://docs.x.ai/docs/guides/chat)[Streaming Response](https://docs.x.ai/docs/guides/streaming-response)[Image Understanding](https://docs.x.ai/docs/guides/image-understanding)[Function Calling](https://docs.x.ai/docs/guides/function-calling)[Structured Outputs](https://docs.x.ai/docs/guides/structured-outputs)[Fingerprint](https://docs.x.ai/docs/guides/fingerprint)[Migration from Other Providers](https://docs.x.ai/docs/guides/migration)

[REST API Reference](https://docs.x.ai/docs/api-reference)

[Chat completions](https://docs.x.ai/docs/api-reference#chat-completions)[Completions (legacy)](https://docs.x.ai/docs/api-reference#completions-legacy)[Create embeddings](https://docs.x.ai/docs/api-reference#create-embeddings)[API Keys](https://docs.x.ai/docs/api-reference#api-key)[List models](https://docs.x.ai/docs/api-reference#list-models)[Get model](https://docs.x.ai/docs/api-reference#get-model)[List language models](https://docs.x.ai/docs/api-reference#list-language-models)[Get language model](https://docs.x.ai/docs/api-reference#get-language-model)[List embedding models](https://docs.x.ai/docs/api-reference#list-embedding-models)[Get embedding model](https://docs.x.ai/docs/api-reference#get-embedding-model)

[

xAI Official Community

](https://discord.gg/x-ai)[

Email xAI Support

](mailto:support@x.ai)

# [#](#rest-api)REST API

The xAI Enterprise API is a robust, high-performance RESTful interface designed for seamless integration into existing systems. It offers advanced AI capabilities with full compatibility with the OpenAI REST API.

The base for all routes is at `https://api.x.ai`.

* * *

## [#](#chat-completions)Chat completions

This API route is shared by chat and image understanding capabilities.

/v1/chat/completions

Create a language model response for a given chat conversation. This endpoint is compatible with the OpenAI API.

## Request body

messages

array

Required

A list of messages that make up the the chat conversation. Different models support different message types, such as image and text.

model

string

Required

Model name for the model to use.

Show optional fields

DefinitionExample

POST

/v1/chat/completions

```
{
  "frequency_penalty": 0,
  "logit_bias": {},
  "logprobs": false,
  "max_tokens": 0,
  "messages": [],
  "model": "",
  "n": 0,
  "presence_penalty": 0,
  "response_format": null,
  "seed": 0,
  "stop": [],
  "stream": false,
  "stream_options": null,
  "temperature": 0,
  "tool_choice": null,
  "tools": [],
  "top_logprobs": 0,
  "top_p": 0,
  "user": ""
}
```

200

Response

```
{
  "choices": [],
  "created": 0,
  "id": "",
  "model": "",
  "object": "",
  "system_fingerprint": "",
  "usage": null
}
```

200400

* * *

## [#](#completions-legacy)Completions (legacy)

Depreciated route in favor of [chat completions](#chat-completions). Offered for backward compatibility.

/v1/completions

Create a language model response for a given prompt. This endpoint is compatible with the OpenAI API.

## Request body

model

string

Required

Specifies the model to be used for the request.

prompt

unknown

Required

Show optional fields

DefinitionExample

POST

/v1/completions

```
{
  "best_of": 0,
  "echo": false,
  "frequency_penalty": 0,
  "logit_bias": {},
  "logprobs": false,
  "max_tokens": 0,
  "model": "",
  "n": 0,
  "presence_penalty": 0,
  "prompt": null,
  "seed": 0,
  "stop": [],
  "stream": false,
  "stream_options": null,
  "suffix": "",
  "temperature": 0,
  "top_p": 0,
  "user": ""
}
```

200

Response

```
{
  "choices": [],
  "created": 0,
  "id": "",
  "model": "",
  "object": "",
  "system_fingerprint": "",
  "usage": null
}
```

200400

Alternatively, an Anthropic compatible endpoint is available.

/v1/complete

Complete endpoint. This endpoint is compatible with the Anthropic API.

## Request body

max\_tokens\_to\_sample

integer

Required

model

string

Required

prompt

string

Required

Show optional fields

DefinitionExample

POST

/v1/complete

```
{
  "max_tokens_to_sample": 0,
  "metadata": null,
  "model": "",
  "prompt": "",
  "stop_sequences": [],
  "stream": false,
  "temperature": 0,
  "top_k": 0,
  "top_p": 0
}
```

200

Response

```
{
  "completion": "",
  "id": "",
  "model": "",
  "stop_reason": "",
  "type": ""
}
```

200400

* * *

## [#](#create-embeddings)Create embeddings

/v1/embeddings

Create an embedding vector representation corresponding to the input text. This endpoint is compatible with the OpenAI API.

## Request body

input

unknown

Required

model

string

Required

ID of the model to use.

Show optional fields

DefinitionExample

POST

/v1/embeddings

```
{
  "dimensions": 0,
  "encoding_format": "",
  "input": null,
  "model": "",
  "preview": false,
  "user": ""
}
```

200

Response

```
{
  "data": [],
  "model": "",
  "object": "",
  "usage": null
}
```

200400

* * *

## [#](#api-key)API key

/v1/api-key

Get information about an API key, including name, status, permissions and users who created or modified this key.

DefinitionExample

GET

/v1/api-key

```
No parameters.
```

200

Response

```
{
  "acls": [],
  "api_key_blocked": false,
  "api_key_disabled": false,
  "api_key_id": "",
  "create_time": "",
  "modified_by": "",
  "modify_time": "",
  "name": "",
  "redacted_api_key": "",
  "team_blocked": false,
  "team_id": "",
  "user_id": ""
}
```

200400

* * *

## [#](#list-models)List models

/v1/models

List all models available with reduced information. This endpoint is compatible with the OpenAI API.

DefinitionExample

GET

/v1/models

```
No parameters.
```

200

Response

```
{
  "data": [],
  "object": ""
}
```

200400

* * *

## [#](#get-model)Get model

/v1/models/{model\_id}

Get the summary of a model with reduced information. This endpoint is compatible with the OpenAI API.

## Path parameters

model\_id

string

ID of the model to get.

DefinitionExample

GET

/v1/models/{model\_id}

```
No parameters.
```

200

Response

```
{
  "created": 0,
  "id": "",
  "object": "",
  "owned_by": ""
}
```

200400404

* * *

## [#](#list-language-models)List language models

/v1/language-models

List all language models available.

DefinitionExample

GET

/v1/language-models

```
No parameters.
```

200

Response

```
{
  "models": []
}
```

200400

* * *

## [#](#get-language-model)Get language model

/v1/language-models/{model\_id}

Get information about a language model using its ID.

## Path parameters

model\_id

string

ID of the model to get.

DefinitionExample

GET

/v1/language-models/{model\_id}

```
No parameters.
```

200

Response

```
{
  "aliases": [],
  "completion_text_token_price": 0,
  "created": 0,
  "fingerprint": "",
  "id": "",
  "input_modalities": [],
  "object": "",
  "output_modalities": [],
  "owned_by": "",
  "prompt_image_token_price": 0,
  "prompt_text_token_price": 0,
  "version": ""
}
```

200400404

* * *

## [#](#list-embedding-models)List embedding models

/v1/embedding-models

List all embedding models available for an API key.

DefinitionExample

GET

/v1/embedding-models

```
No parameters.
```

200

Response

```
{
  "models": []
}
```

200400

* * *

## [#](#get-embedding-model)Get embedding model

/v1/embedding-models/{model\_id}

Embedding model retrieval with full information.

## Path parameters

model\_id

string

ID of the model to get.

DefinitionExample

GET

/v1/embedding-models/{model\_id}

```
No parameters.
```

200

Response

```
{
  "aliases": [],
  "created": 0,
  "fingerprint": "",
  "id": "",
  "input_modalities": [],
  "object": "",
  "owned_by": "",
  "prompt_image_token_price": 0,
  "prompt_text_token_price": 0,
  "version": ""
}
```

200400404
---

---


# Crawl Statistics

- **Source:** https://docs.x.ai/docs
- **Depth:** 2
- **Pages processed:** 17
- **Crawl method:** browser
- **Duration:** 58.77 seconds
- **Crawl completed:** 12/25/2024, 1:36:05 AM

