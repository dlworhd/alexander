import "@/app/globals.css";
import Container from "@/components/dashboard/Container";
import SideBar from "@/components/dashboard/Sidebar";
import { cn } from "@/lib/utils";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <SideBar />
                <Container
                    className={cn(
                        "border border-[var(--container-border)] rounded-md bg-[var(--container-background)]",
                        "absolute top-[16px] right-[16px] w-[var(--container-width)] h-[var(--container-height)]"
                    )}
                >
                    {children}
                </Container>
            </body>
        </html>
    );
}
