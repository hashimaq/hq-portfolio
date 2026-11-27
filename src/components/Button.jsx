const variants = {
  primary:
    'border-accent bg-accent text-accent-fg hover:opacity-90',
  ghost:
    'border-line bg-transparent text-fg hover:border-accent hover:text-accent',
}

function Button({ href, variant = 'primary', children, className = '', ...props }) {
  const classes = `inline-flex items-center justify-center border px-5 py-3 text-sm transition-colors duration-200 ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button
