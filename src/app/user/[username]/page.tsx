import { Metadata } from "next";

type userPageProps = {
    params: Promise<{username: string;}>;
};

export async function generateMetadata({ params }: userPageProps): Promise<Metadata> {
    const username = (await params).username;
    return {
        title: username,
    };
}

export default async function userProfile({ params }: userPageProps) {
    const username = (await params).username;
    return (
        <div>
            {`This is ${username}'s profile`}
        </div>
    );
}
