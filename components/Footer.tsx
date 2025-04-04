export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6 px-4 border-t border-border bg-background">
      <div className="max-w-5xl mx-auto flex justify-center items-center">
        <p className="text-sm text-muted-foreground text-center">
          © {currentYear} Saga. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
