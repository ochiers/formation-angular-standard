# Affichage des données

### Constructeur / variables d'initalisation ?

```typescript
export class DemoComponent {
  title: string = "toto";
  demo: string;
  constructor() {
    this.demo = 'Demo';
  }
}
```

### Modèle de données

```typescript
export class Demo {
  constructor(
    public id: number,
    public label: string
  ) { }
}
demos: Demo[] = [
  new Hero(1, 'A'),
  new Hero(2, 'B'),
  new Hero(3, 'C')
];
```

```html
<li *ngFor="let demo of demos"> {{ hero }}</li>
```

### Interpolation

```html
{{ demo }}
<p>La somme de 1 + 1 est {{1 + 1}}</p>
```

### Expressions

```html
<div [prop]="expression"></div>
```

### Contexte d'expressions --> scope du Component

```html
<div [hidden]="demos.length > 3"></div>
```

### Statements

```html
<button (click)="deleteDemo()">Delete demo</button>
```