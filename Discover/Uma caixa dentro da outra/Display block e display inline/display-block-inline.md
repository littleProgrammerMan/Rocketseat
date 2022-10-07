## display: block vs display: inline

- Como as caixas se comportam em ralação às outras caixas
- Comportamento externo das caixas

<<<<<<< HEAD
| **block**                         | **inline**                    |
| --------------------------------- | ----------------------------- |
| Ocupa toda a linha, colocamdo o   | Elemento ao lado do outro     |
| próximo elemento abaixo desse     |                               |
=======
| **block**                         |  **inline**                   |
| --------------------------------- | ----------------------------- |
| Ocupa toda a linha, colocamdo o   | Elemento ao lado do outro     |
| próximo elemento abaixo desse     |
>>>>>>> 54001fa123ea30a7067698f36f728a29d246ec87
| --------------------------------- | ----------------------------- |
| width e height são respeitados    | width e height não funcionam  |
| --------------------------------- | ----------------------------- |
| padding, margin, border, irão     | Somente valores horizontais de|
| funcionar normalmente.            | margin, padding e border      |
| --------------------------------- | ----------------------------- |

exemplos
block: `<p> <div> <section>`, todos os headings `<h1><h2>...`
inline: `<a> <strong> <span> <em>`