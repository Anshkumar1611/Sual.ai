import { Logo, ChatBubble } from '../components';

export default function Home() {
  return (
    <div className="min-h-screen flex bg-slate-100 items-center bg-white justify-center p-4">
      {/* Sual.AI Logo */}
      <div className="absolute top-6 left-6">
        <Logo />
      </div>

      {/* Chat Bubble */}
      <ChatBubble />
    </div>
  );
}
