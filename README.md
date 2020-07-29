# Build a WPF Translation App with Azure Cognitive Services

In this tutorial, you'll build a [Windows Presentation Foundation (WPF)](https://docs.microsoft.com/visualstudio/designers/getting-started-with-wpf?view=vs-2017) app that uses Azure Cognitive Services for text translation, language detection, and text to speech conversion using subscription key.

What is WPF? It is a UI framework that creates desktop client apps. The WPF development platform supports a broad set of app development features, including an app model, resources, controls, graphics, layout, data binding, documents, and security. It is a subset of the .NET Framework, so if you have previously built apps with the .NET Framework using ASP.NET or Windows Forms, the programming experience should be familiar. WPF uses the Extensible app Markup Language (XAML) to provide a declarative model for app programming, which we'll review in the coming sections.

## Cognitive Services used in this tutorial

This is a list of the Cognitive Services used in this tutorial. Follow the link to browse the API reference for each feature.

| Service | Feature | Description |
|---------|---------|-------------|
| Translator Text | [Get Languages](https://docs.microsoft.com/azure/cognitive-services/translator/reference/v3-0-languages) | Retrieve a complete list of supported languages for text translation. |
| Translator Text | [Translate](https://docs.microsoft.com/azure/cognitive-services/translator/reference/v3-0-translate) | Translate text into more than 60 languages. |
| Translator Text | [Detect](https://docs.microsoft.com/azure/cognitive-services/translator/reference/v3-0-detect) | Detect the language of the input text. Includes confidence score for detection. |


## Prerequisites

* An Azure Cognitive Services subscription. [Get a Cognitive Services key](https://docs.microsoft.com/azure/cognitive-services/cognitive-services-apis-create-account#multi-service-subscription).
* An Azure Speech Services subscription. [Get azure speech services account](https://docs.microsoft.com/en-in/azure/cognitive-services/speech-service/get-started)
* A Windows machine
* [Visual Studio 2017](https://www.visualstudio.com/downloads/) - Community or Enterprise
* Development setup. [Setup](https://docs.microsoft.com/en-in/azure/cognitive-services/speech-service/quickstarts/setup-platform?tabs=dotnet%2Cwindows%2Cjre%2Cbrowser&pivots=programming-language-csharp)

## Build instructions

Follow these instructions to run the WPF translation app on your Windows machine. For the full tutorial, see [Tutorial: Create a translation app with WPF, C#](https://docs.microsoft.com/azure/cognitive-services/translator/tutorial-wpf-translation-csharp).

1. Clone this repository.
2. Open `WPFTranslationApp.sln`.
3. Add your Cognitive Services subscription key to `MainWindow.xaml.cs`.
4. Add your Cognitive Speech Services subscription key to `MainWindow.xaml.cs`.
5. Add your REGION where you have created the Azure Services to `MainWindow.xaml.cs`.
5. Click **Start** in Visual Studio.
6. That's it, you should have a working app.

## Useful links

* [Translator Text API](https://docs.microsoft.com/azure/cognitive-services/translator/translator-info-overview)
* [Translator Text API Reference](https://docs.microsoft.com/azure/cognitive-services/translator/reference/v3-0-reference)

