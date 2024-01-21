import { Header } from "./header";

type PageDescription = {
    header: string;
    message: string;
}

export function PageDescription({header, message}: PageDescription) {
    return (
        <div>
            <Header>{header}</Header>
            <p>{message}</p>
        </div>
    );
}