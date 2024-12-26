export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <h2>Route group layout</h2>
            {children}
        </>
    )
}