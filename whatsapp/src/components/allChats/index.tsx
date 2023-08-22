import { Section, Header, Icons, FuncIcons, Profile,
        AddIcon, ChatIcon, BulbIcon, MoreIcon
} from "./styles";

export function AllChats() {
    return (
        <Section>
        <Header>
            <Icons>
                <Profile>
                    <img src="https://avatars.githubusercontent.com/u/89949017?v=4"></img>
                </Profile>
                <FuncIcons>
                    <AddIcon size={24} color="var(--silver-500)"/>
                    <ChatIcon size={24} color="var(--silver-500)"/>
                    <BulbIcon size={24} color="var(--silver-500)"/>
                    <MoreIcon size={24} color="var(--silver-500)"/>
                </FuncIcons>
            </Icons>
        </Header>
        </Section>
    )
}