# Changelog

## [0.1.0] - 2024-12-24
### Added
- Initial Chrome extension structure
- Basic UI for chat interface
- API key settings modal
- Context menu activation
- Grok AI integration (preliminary)

### Features
- Sidebar chat interface
- API key storage
- Right-click context menu support

### Planned Improvements
- Enhanced error handling
- More robust API communication
- Additional UI customization options

## [1.0.1] - 2024-12-25

### Fixed
- Scroll position now properly saves and restores when reopening the extension
- Added intelligent scroll behavior that maintains position for existing messages but scrolls to bottom for new messages
- Improved scroll position tracking with debounced saves during scrolling
- Added visibility change detection to save scroll position when popup closes

## [1.1.0] - 2024-12-25

### Added
- Image upload functionality with Grok Vision model integration
- Image preview support in chat interface
- Base64 image encoding and handling
- Automatic model switching between text and vision models
- Improved UI with camera icon for image uploads

### Enhanced
- Chat interface with better message handling
- Input section styling with modern design
- Error handling for image uploads
- Message history to support image messages
