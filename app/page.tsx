import * as Craft from "@/components/craft";
import Balancer from "react-wrap-balancer";
import Posts from "@/components/posts";
import CTA from "@/components/cta";

export default function Home() {
  return (
    <Craft.Main>
      <Craft.Section className="border-b bg-accent">
        <Craft.Container>
          <h1>
            <Balancer>Fjord Directory</Balancer>
          </h1>
          <h3>
            Headless Wordpress built with Next.js, Tailwind, Shadcn/ui, and
            Craft.
          </h3>
          <p>
            Fjord is a Headless Next.js and Wordpress Template created by{" "}
            <a href="https://bridger.to">Bridger</a> and{" "}
            <a href="https://cameron.so">Cameron</a> at{" "}
            <a href="https://9d8.dev">9d8</a> and{" "}
            <a href="https://alpinecodex.com">Alpine Codex</a>. Get started by
            using the template{" "}
            <a href="https://github.com/9d8dev/fjord-minimal">
              GitHub repository
            </a>{" "}
            today.
          </p>
        </Craft.Container>
      </Craft.Section>
      <Posts searchParams={{}} />
      <CTA />
    </Craft.Main>
  );
}
