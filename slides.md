---
# You can also start simply with 'default'
theme: the-unnamed
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: "From ChatGPT User to RAG Implementer: A Developer's Journey"
info: |
  ## From ChatGPT User to RAG Implementer: A Developer's Journey

  A story of a developer who didn't care about LLMs
  And then he started
# apply unocss classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
# take snapshot for each slide in the overview
overviewSnapshots: true
aspectRatio: 16/9
monaco: false
layout: cover
---

# From ChatGPT User to RAG Implementer: A Developer's Journey

---
class: text-center
layout: cover
---
# I'm Pasha

---
class: text-center
layout: cover
---

# And this is my story

---

# I'm Pasha

I used to be a ChatGPT user

<p v-click>And I didn't <span v-mark="{at: 2, color: 'orange', type: 'crossed-off'}">really</span> care about its internals</p>

<p v-click="3">I didn't need to know much about LLMs</p>

<p v-click="4">I didn't hear about RAG <span v-click="5">(Retrieval-augmented generation)</span></p>

---

# Of course…

I heard about neural networks
  
<img 
  v-click
  src="https://www.marktechpost.com/wp-content/uploads/2022/09/Screen-Shot-2022-09-23-at-10.46.58-PM.png"
  alt="Neural Network Diagram"
  class="w-120 h-auto mix-blend-exclusion"
/>

<p v-click>But what the heck is this?</p>

---
class: text-center
---

# How I perceived LLMs


```mermaid
graph LR
    Me --> B[✨Black Box✨]
    B[✨Black Box✨] --> Output[Output 🖼️]
```

<p class="flex justify-center" v-click>
<img 
  src="https://www.marktechpost.com/wp-content/uploads/2022/09/Screen-Shot-2022-09-23-at-10.46.58-PM.png"
  alt="Neural Network Diagram"
  class="w-120 h-auto mix-blend-difference"
/>
</p>

---

# Time to tell about me

1. I work with JVM languages for almost 15 years 
2. I used to be a
   1. Backend developer
   2. Data engineer
   3. Engineering manager
3. Worked with data scientists, product managers, and other stakeholders
4. Usually did performance optimizations
5. Worked with Spring and without it

---

# And now…

1. Developer Advocate at BellSoft
2. Have a lot of time to experiment
3. Need to produce content for the community
4. Still love to code

<p>
<div v-click v-mark="{at: 1, color: 'yellow', type: 'box'}">
<p>Follow me!</p>
<p><logos-bluesky /> asm0dey</p>
<p><logos-twitter /> asm0di0</p>
<p><logos-mastodon-icon /> @asm0dey@fosstodon.org</p>
</div>
</p>

---

# One day…

I founds that we have A LOT of documents:

1. Blog posts
2. Documentation
3. Whitepapers

And I just can't find my way through them

<p v-click>So I decided to do something about it</p>

---

# Looking for solution

<ul>
  <li v-click="1">Elasticsearch?</li>
  <li v-click="2"><span v-mark="{at: 3, color: 'orange', type: 'crossed-off'}">Google Desktop?</span></li>
  <li v-click="4">

`grep`?
  
  </li>
</ul>

---
layout: center
---

<img 
  src="/yak.jpg"
  class="w-auto h-130"
/>

---

# Luckily I have a friend

