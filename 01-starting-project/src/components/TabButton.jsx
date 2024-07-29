export default function TabButton({ children, isSelect, ...props }) {
    console.log("TABBUTTON COMPONENT EXECUTING")
    return (
        <li>
            <button className={isSelect ? "active" : undefined} {...props}>{children}</button>
        </li>
    )
}