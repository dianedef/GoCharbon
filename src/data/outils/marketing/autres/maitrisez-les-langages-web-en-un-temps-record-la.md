---
section: apps
metadataEnrichedAt: null
tags:
- Outils Français
- Marketing
imageNameKey: null
title: Maîtrisez Les Langages Web En Un Temps Record La Méthode Choc
author: Diane
description: 'Découvre Maîtrisez Les Langages Web En Un Temps Record La Méthode Choc
  : outil français pour entrepreneurs, fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../../../assets/astro.jpeg
---

🔹✅💡🥊🛡️🔇🧠📣🎁🏆📚🛠💥🙌😱❌✂️
# **Day 1- Divide webpage into logical sections**

⁣HTML5 offers several elements that will help you organize your layout in appropriate sections:⁣⁣

1. Header `<header>`
2. Navigation bar `<nav>`
3. Main Content `<main>` with `<article>` and `<section>` ⁣⁣
4. Sidebar `<aside>`⁣⁣
5. Footer `<footer>`

⁣⁣Good Webpages may look or perform differently but they share similar standard structure.⁣⁣  
⁣⁣  
By using this standard structure with the semantic elements mentioned above your document becomes more readable and accessible.⁣⁣

# [](https://dev.to/theindiancodinggrl/20-days-of-html-learn-20-amazing-things-about-html-part-1-2p99#day-2-what-are-the-semantic-elements-why-are-they-important)**Day 2- What are the Semantic elements? Why are they important?**

Rather than writing vague divs in your document.  
How about using semantic tags?

_Semantic tags_ define the purpose of the element. It's beneficial to use tags, class names and ids that give meaning to your content rather than just define its looks. Presentation is the responsibility of CSS.

For example- `<p>`,`<header>`,`<figure>` tells the content wrapped around them are paragraph, header or image. They help the browser, as well as developers, understand the meaning of their content.

Why is Semantic HTML important?

- Helps to write clean and maintainable code
- Enhances Accessibility
- Improves SEO

# [](https://dev.to/theindiancodinggrl/20-days-of-html-learn-20-amazing-things-about-html-part-1-2p99#day-3-make-any-content-on-your-page-editable-by-users)**Day 3- Make any content on your page editable by users**

The text of the webpage can be made editable using the _contenteditable_ attribute.

Just set the _contenteditable_ to true on any of the elements you want to make editable.  
It can be helpful in the making of a simple text editor.  

```
<div contenteditable="true">
  Edit me!
</div>
```

# [](https://dev.to/theindiancodinggrl/20-days-of-html-learn-20-amazing-things-about-html-part-1-2p99#day-4-implement-a-download-button-with-html5)**Day 4- Implement a Download button with HTML5**

Usually, when the user clicks on a link to media files, it will be opened in the browser.  
If you want to give users the option to save that file on their computer, download attribute can be used.

The download attribute to `<a>` elements makes the linked URL a download link rather than a navigational. Meaning users can save the link rather than navigating to it.

The download attribute can be used with or without value. To rename the default name, a value can be given which becomes the name of the file.  

```
<a href="this-is-the-download-link.pdf" download="Download.pdf">
  Download me
</a>
```

# [](https://dev.to/theindiancodinggrl/20-days-of-html-learn-20-amazing-things-about-html-part-1-2p99#day-5-define-options-with-datalist-tag)**Day 5- Define options with datalist tag**

⁣The Html5 `<datalist>` tag is used to provide autocomplete feature in the input field of the form.⁣  
⁣  
It specifies the set of predefined options for the user to input.⁣  
⁣  
To bind it to the input, it is usually used with the `<input>` element's _list_ attribute whose value matches the datalist id.⁣  
⁣It works with all types of inputs like data, range, color etc.⁣  

```
<input list="languages" placeholder="Choose language" />
<datalist id="languages">
  <option>Python</option>
  <option>Javascript</option>
  <option>Java</option>
</datalist>

```

# [](https://dev.to/theindiancodinggrl/20-days-of-html-learn-20-amazing-things-about-html-part-1-2p99#day-6-collapsible-sections-with-html5%E2%81%A3)**Day 6- Collapsible Sections with HTML5⁣**

_⁣Details_ tag is used to make collapsible sections when it is required to provide extra information about a subject that users can hide or view by their choice.  
⁣  
Used with the summary tag which specifies the title that can be clicked to expand or collapse the details.⁣

By default, the details are hidden, the open attribute can be used to change the default behavior.⁣  

```
<details>
<summary> Javascript </summary>
<p> I am an amazing language </p>
</details>
```

# [](https://dev.to/theindiancodinggrl/20-days-of-html-learn-20-amazing-things-about-html-part-1-2p99#day-7-responsive-images-with-srcset)**Day 7- Responsive Images with srcset**

⁣To make an image responsive means to switch between different versions of the image so that they are being displayed according to their respective device sizes and resolutions.⁣  
⁣  
⁣srcset, an attribute of `<img>` element is used to give URLs of different versions of the image and a descriptor so that the browser can display the most appropriate one in a given situation.⁣  
⁣  
Here, descriptor x represents device-pixel-ratio i.e a device with 2x resolution will only display the image associated with 2x in the srcset attribute. ⁣  
⁣  
The src attribute is present for browsers that don't understand srcset.  

```
<img srcset="pizza-small.jpg,
             pizza-medium.jpg 1.5x,
             pizza-large.jpg 2x"
     src="pizza-large.jpg"
     alt="a slice of cheesy pizza">
```

# [](https://dev.to/theindiancodinggrl/20-days-of-html-learn-20-amazing-things-about-html-part-1-2p99#day-8-html-periodic-tables)**Day 8- HTML Periodic Tables**

⁣There exist periodic tables and cheatsheets for HTML elements. ⁣  
⁣A great tool to find all the elements with their descriptions in a single place.⁣  
These can be very helpful and handy as who remembers all the tags.

[https://htmlcheatsheet.com/](https://htmlcheatsheet.com/)  
[https://developer.mozilla.org/en-US/docs/Learn/HTML/Cheatsheet](https://developer.mozilla.org/en-US/docs/Learn/HTML/Cheatsheet)  
[https://websitesetup.org/html5-periodical-table/](https://websitesetup.org/html5-periodical-table/)

# [](https://dev.to/theindiancodinggrl/20-days-of-html-learn-20-amazing-things-about-html-part-1-2p99#day-9-all-about-quotations)**Day 9- All about Quotations**

⁣Quotations are an important part of the content.⁣  
There are few elements that can be used according to their semantic meanings to display quotations on your page:  
⁣

#### [](https://dev.to/theindiancodinggrl/20-days-of-html-learn-20-amazing-things-about-html-part-1-2p99#the-raw-ltblockquotegt-endraw-element)The `<blockquote>` element:

- Provides a section that defines quotations from another source.⁣
- Used for indicating long quotations.⁣
- Cite attribute is used to provide the URL of the source of the quotation.⁣

#### [](https://dev.to/theindiancodinggrl/20-days-of-html-learn-20-amazing-things-about-html-part-1-2p99#the-raw-ltqgt-endraw-element)The `<q>` element:

- Provides an inline quote in a block of text. ⁣
- Used for indicating short quotations.⁣
- Inserts quotation marks around the enclosed text.⁣

#### [](https://dev.to/theindiancodinggrl/20-days-of-html-learn-20-amazing-things-about-html-part-1-2p99#the-raw-ltcitegt-endraw-element)The `<cite>` element:

- Provides the title of the source of work(e.g. book, album, song, poem, essay, etc.)⁣

```
<blockquote>
  The future was uncertain, absolutely, and there were many hurdles, twists, and turns to come, but as long as I kept moving forward, one foot in front of the other, the voices of fear and shame, the messages from those who wanted me to believe that I wasn't good enough, would be stilled.
  ― Chris Gardner,
  <cite>The Pursuit of Happyness</cite>
</blockquote>
<p>
  <q>The goal isn't to live forever, the goal is to create something that will.</q><br>
  ― Chuck Palahniuk, <cite>Diary</cite>
</p>

```

# [](https://dev.to/theindiancodinggrl/20-days-of-html-learn-20-amazing-things-about-html-part-1-2p99#day-10-highlight-it)**Day 10- Highlight it!**

⁣Ever wanted to have highlighted text on your page?⁣  
You can do it with just HTML, use `<mark>` tag to highlight parts of the text which needs extra attention.⁣  
⁣  
Mostly used with quotations which are from other sources to determine which text is more relevant according to you. ⁣  
⁣  
Don't use it only for decoration purpose.⁣  
⁣  
Difference between `<mark>` and `<strong>`-  
`<mark>` denotes relevance of the content, while `<strong>` indicates importance.  

```
<p>
  <q>The goal isn't to live forever, the goal is to <mark>create something</mark> that will.
  </q><br />
  ― Chuck Palahniuk, <cite>Diary</cite>
</p>
```


# **Day 11- Drag and Drop**

Any HTML element can be dragged and dropped irrespective of its native behavior.⁣  
⁣It is done by using the global attribute _draggable_ i.e setting its value to true.⁣  
⁣  
Events like ondragstart, ondragover, etc. are used to make elements more functional.⁣  
⁣Images and links are by default draggable.  

```
<p draggable="true">
  Drag and Drop me on the other side!
</p>
```

# [](https://dev.to/theindiancodinggrl/20-days-of-html-learn-20-amazing-things-about-html-part-2-n6n#day-12-progress-and-meter-elements)**Day 12- Progress and Meter Elements**

1. `<progress>` element:
    - Displays a progress bar showing the completion progress of a task.⁣⁣
    - It has two attributes max and value.⁣⁣
    - No min attribute, the minimum value is always 0.⁣⁣ ⁣⁣
2. `<meter>` element:
    - Displays either a fractional value or a value within a range.⁣⁣
    - It is not only to show the progress(high), it can also fluctuate(high or low).⁣⁣
    - Has the following attributes: max, min, high, low, optimum.

```
<label for="download">Download Progress</label>
<progress id="download" max="100" value="50">
</progress>
<br />
<label for="temp">Temperature Meter:</label>
<meter id="temp" min="0" max="100" low="30" high="60" optimum="80" value="10">
</meter>
```

# [](https://dev.to/theindiancodinggrl/20-days-of-html-learn-20-amazing-things-about-html-part-2-n6n#day-13-play-some-music)**Day 13- Play some Music**

⁣`<audio>` element provides a way to add audio resources to a web page without the need to use any other plugin.⁣  
Just include a path to the media inside the src attribute.⁣  
⁣  
A fallback text is enclosed within the tag to be shown to browsers that don't support the element.⁣  
⁣  
By default, the browser does not show any controls. ⁣  
To add the ability for users to play, pause, adjust volume, etc. 'controls' attribute can be used.  

```
<audio controls src="dope_music.mp3">
  Your browser does not support the audio element.
</audio>
```

# [](https://dev.to/theindiancodinggrl/20-days-of-html-learn-20-amazing-things-about-html-part-2-n6n#day-14-show-insertion-and-deletion)**Day 14- Show Insertion and Deletion**

`<ins>` element indicates text that has been added to the document.⁣⁣  
`<del>` is used for the text that has been deleted from the document.⁣⁣

So far, both of these have accessibility concerns which can be overcome by using, before and after pseudo-elements with the CSS content property.  

```
<p>Go to a
  <del>movie</del>
  <ins>conference</ins>
  this weekend.
</p>
```

# [](https://dev.to/theindiancodinggrl/20-days-of-html-learn-20-amazing-things-about-html-part-2-n6n#day-15-word-break-opportunity)**Day 15- Word Break Opportunity**

⁣When a word is too long, and you don't want the browser to break it at the random place, `<wbr>` helps to break the word where you want.⁣  
⁣  
The `<wbr>` element specifies a position within text where it would be appropriate to add a line-break.  

```
<p>This is a lonnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnngggggggggggggggggggggggggggggggggggggggggg<wbr>word.</p>
```

# [](https://dev.to/theindiancodinggrl/20-days-of-html-learn-20-amazing-things-about-html-part-2-n6n#day-16-best-practices)**Day 16- Best Practices**

A great place to find the HTML best practices to write maintainable and scalable code.

[HTML best practices](https://github.com/hail2u/html-best-practices)

# [](https://dev.to/theindiancodinggrl/20-days-of-html-learn-20-amazing-things-about-html-part-2-n6n#day-17-adding-color-picker-and-date-picker-into-the-forms)**Day 17- Adding Color picker and Date picker into the forms**

⁣`<input>` element with the attribute of type="color" provides an interface of color picker or the user can also enter the color in hexadecimal format.⁣  
⁣  
`<input>` element with the attribute of type="date" creates a date picker or lets the user enter a date.⁣  

```
<label>Choose Color:
</label>
<input type="color" value="#ffffff" />
```

# [](https://dev.to/theindiancodinggrl/20-days-of-html-learn-20-amazing-things-about-html-part-2-n6n#day-18-setting-shortcut-keys)**Day 18- Setting Shortcut Keys**

⁣The _accesskey_ is a global attribute that specifies a shortcut key to activate an element.⁣  
⁣  
Shortcut keys can be accessed in number of ways according to the browser such as:⁣  
`ctrl + alt + accesskey⁣`  
OR⁣  
`alt + accesskey`  
OR⁣  
`alt + shift + accesskey`

# [](https://dev.to/theindiancodinggrl/20-days-of-html-learn-20-amazing-things-about-html-part-2-n6n#day-19-make-input-fields-readonly)**Day 19- Make Input fields readonly**

⁣The `readonly` attribute prevents the editing on an input field by the user i.e. it makes the elements immutable.⁣  
⁣  
These readonly elements can be styled by :read-only and :read-write pseudo classes.⁣  
⁣  
It is different from the disabled attribute as the elements with readonly attribute are focusable whereas this isn't the case with the disabled.  

```
<label for="country">Country:
</label>
<input type="text" name="country" value="India" readonly>
```

# [](https://dev.to/theindiancodinggrl/20-days-of-html-learn-20-amazing-things-about-html-part-2-n6n#day-20-ways-to-improve-accessibility)**Day 20- Ways to improve Accessibility**

1. Use semantic elements.⁣ ⁣
2. A label should be associated with every form control.⁣ ⁣
3. Alternative text should be included for images.⁣ ⁣
4. Use tabindex="0" to add an element that does not normally receive focus, such as `<div>` or `<span>`.⁣ ⁣
5. Use ARIA roles and attributes to provide additional meaning.For example, role="search" for search functionality.