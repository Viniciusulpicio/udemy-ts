import { spawn } from 'child_process';
import * as React from 'react';

export interface Props {
    title: string
    content: string
    comentsQty: number
    tags: string []

    // 8 - ennum
    category: Category
}

export enum Category {
    JS = "JavaScript",
    TS = "TypeScript",
    P = "Python"
}

export default function Destructuring ({title, content, comentsQty, tags, category}: Props) {
  return (
    <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <p>Quantidade de comentario: {comentsQty}</p>
        <div>
            {tags.map(tag => (
                <span>#{tags}</span>
            ))}
        </div>
        <h4>Categoria: {category}</h4>
    </div>
  );
}
