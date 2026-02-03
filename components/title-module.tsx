import React from "react";

export default function TitleModule({ title }: { title: string }) {
  return <h2 className="text-xl font-bold text-secondary-foreground">{title}</h2>;
}
