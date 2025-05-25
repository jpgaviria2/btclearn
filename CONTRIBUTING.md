
# Contributing to BTCLearn

Thank you for your interest in contributing to BTCLearn! This project is open source and welcomes contributions from the Bitcoin community.

## How to Contribute

### Adding New Resources

1. Fork the repository
2. Add your Bitcoin-only resource to the appropriate category in `src/pages/Index.tsx`
3. Ensure the resource is:
   - Bitcoin-only (no altcoins or blockchain projects)
   - Educational, practical, or useful for the Bitcoin community
   - Recent and actively maintained
   - Has a working URL

### Resource Categories

- **Education**: Books, articles, documentation, learning materials
- **Podcasts**: Bitcoin-focused audio content
- **Wallets**: Bitcoin wallet software and guides
- **Merchants**: Payment processors and merchant solutions
- **Nodes**: Node software and management tools
- **Community**: Forums, meetups, organizations
- **Tools**: Utilities and software for Bitcoin users
- **Security**: Privacy and security guides
- **Tutorials**: Step-by-step learning content

### Guidelines

1. **Bitcoin-Only**: We only accept resources that focus exclusively on Bitcoin
2. **Quality**: Resources should be well-maintained and provide value
3. **No Commercial Bias**: Avoid overly promotional content
4. **Accuracy**: Verify that links work and descriptions are accurate

### Submitting Changes

1. Create a new branch for your changes
2. Make your modifications
3. Test that all links work properly
4. Submit a pull request with a clear description
5. Wait for review and feedback

### Code Style

- Follow the existing TypeScript/React patterns
- Use Tailwind CSS for styling
- Keep components focused and readable
- Add appropriate types for new data

## Resource Template

When adding a new resource, use this format:

```typescript
{
  id: [next_available_number],
  title: "Resource Name",
  description: "Brief description of what this resource offers.",
  category: "Category",
  url: "https://example.com",
  icon: AppropriateLucideIcon
}
```

## Questions?

Feel free to open an issue if you have questions about contributing or need clarification on the guidelines.

## License

By contributing to BTCLearn, you agree that your contributions will be licensed under the MIT License.
