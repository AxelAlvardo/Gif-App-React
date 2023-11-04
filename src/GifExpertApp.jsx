import { useState } from "react";

import { Form } from "./components/Form/Form";
import { List } from "./components/List/List";
import { Title } from "./components/Title/Title";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    return (
        <>
            {/* TITULO */}
            <Title />
            {/* FORMULARIO */}
            <Form categories={categories} setCategories={setCategories}/>
            {/* LISTA DE RESULTADOS */}
            <List categories={categories}/>
        </>
    );
}
