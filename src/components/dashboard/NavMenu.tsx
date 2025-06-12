import { cn } from "@/lib/utils";
import React from "react";

interface NavMenuProps {
    className?: string;
    children: React.ReactNode;
}

export default function NavBarMenu({ className, children }: NavMenuProps) {
    return (
        <nav className={cn(className)}>
            <ul className="flex flex-col gap-4">{children}</ul>
        </nav>
    );
}
