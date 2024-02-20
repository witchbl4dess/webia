import { MessageSquare } from "lucide-react";
import Heading from "@/components/basic/heading";

const ConversationPage = () => {
    return (
        <div>
            <Heading
                title="Conversation"
                description="Out most advanced conversation model."
                icon={MessageSquare}
                iconColor="text-violet-500"
                bgColor="bg-violet-500/10"
            />
        </div>
    );
}

export default ConversationPage;