import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";

export function TerminalLoading() {
  return (
    <Terminal className="px-3 py-4 my-5">
      <TypingAnimation>&gt; npm install sajed-portfolio</TypingAnimation>

      <AnimatedSpan delay={2000} className="text-green-500">
        <span>✔ Fetching portfolio of Sajed.</span>
      </AnimatedSpan>

      <AnimatedSpan delay={2500} className="text-green-500">
        <span>✔ Finding...</span>
      </AnimatedSpan>

      <TypingAnimation delay={3000} className="text-muted-foreground">
        Success! Portfolio loaded...
      </TypingAnimation>

      <TypingAnimation delay={4000} className="text-muted-foreground">
        Rendering...
      </TypingAnimation>
    </Terminal>
  );
}
