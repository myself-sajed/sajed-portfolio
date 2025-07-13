import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  githubURL?: string;
  description: string[];
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  tags,
  link,
  image,
  links,
  className,
}: Props) {
  return (
    <Card
      className={
        "flex flex-col overflow-hidden gap-3 border hover:shadow-lg transition-all p-2 sm:p-5 duration-300 ease-out h-full"
      }
    >
      <a
        href={href || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className={cn("block cursor-pointer", className)}
      >
        {image && (
          <Image
            src={`/assets/projects/${image}`}
            alt={title}
            width={500}
            height={300}
            className="w-full overflow-hidden object-contain object-top rounded-md"
          />
        )}
      </a>
      <CardHeader className="px-2">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base">{title}</CardTitle>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <div className="-space-y-1.5">
            {
              description.map((desc, index) => (
                <Markdown key={index} className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
                  {`- ${desc}`}
                </Markdown>
              ))
            }
          </div>

        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-2">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <span
                key={tag}
                className="text-[10px] bg-muted font-medium rounded-full px-2.5"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-2 pb-2">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links?.map((link, idx) => (
              <a href={link?.href} key={idx} target="_blank"
                rel="noopener noreferrer">
                <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
                  {link.icon}
                  {link.type}
                </Badge>
              </a>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
