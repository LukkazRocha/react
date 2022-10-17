type Props = {
    title?: String;
}

export const Header = ({ title }: Props) => {
    return (
        <header>
            <h1>{title}</h1>
            <hr/>
        </header>
    );
}
