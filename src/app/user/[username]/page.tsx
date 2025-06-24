import { Metadata } from "next";

type userPageProps = {
    params: {
        username: string | Promise<string>
    };
}

export async function generateMetadata({ params }: userPageProps): Promise<Metadata> {
    const username = await params.username //to do : this is giving warning to use await even after using await
    return {
        title: username,
    };
}

export default async function userProfile({ params } : userPageProps) {
    const username = await params.username
    return (
        <div>
            {`this is  ${username}'s profile`}
        </div>
    )
}