# Seletores

Conecta um elemento HTML com o CSS a fim de alterar o elemento.

## Tipos 

* Element selector
    - Todos os elementos HTML
* ID Selector
    - Um elemento que tenha um atributo `id`.
    - Cada id deverá ser único.
* Class Selector
    - Os elementos que contem um atributo `class`.
    - Podemos ter uma ou mais classes.
* Attribute selector
    - Um elemento que tenha um atributo especifico.
* Pseudo-class selector
    - Elementos em um estado específico.

## Múltiplos

Você poderá selecionar mútiplos elementos e aplicar alguma regra css para todos eles.

Usamos uma separação por vírgula para isso.

```css
h1, p, a {
    color: red;
}
```