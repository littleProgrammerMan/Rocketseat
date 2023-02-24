# flex 

- shorthand
- flex-grow flex-shrink flex-basis 
- podem ter 1, 2 ou 3 valores

```html
<div class="page">
    <aside>Aside</aside>
    <main>
        Main
        <section>Content 1</section>
        <section>Content 2</section>
        <section>Content 3</section>
    </main>
</div>
```

```css
* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}

.page {
    border: 2px solid;
    min-height: 100vh;
    display: flex;
}

aside {
    background: lightgreen;
    flex-grow: 1;
}

main {
    background: lightblue;
    flex-grow: 2;
    display: flex;
    flex-direction: column;
}

main section:nth-child(1) {
    background: lightgoldenrodyellow;
    flex-grow: 2;
}

main section:nth-child(2) {
    background: lightsalmon;
    flex-grow: 1;
}

main section:nth-child(3) {
    background: lightpink;
    flex-grow: 1;
}
```