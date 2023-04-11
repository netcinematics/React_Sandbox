export default function WordGame1(){

    let phraseTXT = "fill in the blank"
    let phraseARR = phraseTXT.split(' ');
    let promptTXT = "other words same size to magic brain" + " " + phraseTXT; 
    let promptARR = promptTXT.split(' ').reverse();

    const GameView = phraseARR.map(item =>
        <div>{item}</div>
    // <li key={item.id}>
    //     {item.title}
    // </li>
    );

    return (
        <>
            <h1>aWordaGame1</h1>
            GamePrompt:{promptARR}
            {GameView}
        </>
    )
}