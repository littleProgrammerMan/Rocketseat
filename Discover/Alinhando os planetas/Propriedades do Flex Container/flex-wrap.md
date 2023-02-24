# Flex-wrap

- Podemos usar multi linhas.
- Cada nova linha, um novo flex container

Aqui podemos observar o comportamento do flex-wrap.

Logo abaixo definimos isso no HTML

```html
<div class="box">
    <div class="div">A</div>
    <div class="div">B</div>
    <div class="div">C</div>
</div>
```

E isso no CSS

```css
.box {
    border: 1px dashed red;
    display: flex;
    flex-wrap: wrap;
}

.div {
    border: 1px solid black;
    width: 300px;
}
```