export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-border">
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Leian Carl Dela Cruz
        </p>
      </div>
    </footer>
  );
}
