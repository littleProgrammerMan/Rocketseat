// props: { author: "", content: "" }

export function Post(props) {
    return (
        <>    
            <p><strong>{props.author}</strong></p>
            <p>{props.content}</p>
        </>
    )
}

// Default Exports vs Named Exports
// Utilizando default export eu posso atribuir o nome que quiser na importação