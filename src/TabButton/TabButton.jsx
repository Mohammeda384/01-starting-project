import './TabButton.css'

export default function TabButton({children, onSelect, isSelected}){
    function HandleClick(){
        console.log("Button clicked")
    }
    return (
        <li>
            <button className = {isSelected ? "active" : ""} onClick = {onSelect}>{children} </button>
        </li>
    )
}