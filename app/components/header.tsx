type HeaderProps = {
    children: String;
}

export function Header({children}: HeaderProps) {
    return <h1>{children}</h1>
}