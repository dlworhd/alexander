import { cn } from "@/lib/utils";
import React from "react";

interface NavFooterProps {
    className?: string;
    children: React.ReactNode;
}

export default function NavFooter({ className, children }: NavFooterProps) {
    return <div className={cn(className)}>{children}</div>;
}
