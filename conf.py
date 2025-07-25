# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'RobusTest Documentation 2025'
copyright = '2025, RobusTest'
author = 'RobusTest'
release = '2025.1.0'
version = '2025.1'

# Version information
html_context = {
    'version_info': {
        'current': '2025.1.0',
        'previous': '2024.12.0',
        'next': '2025.2.0',
        'release_date': 'January 2025',
        'changelog_url': 'CHANGELOG.html',
        'github_url': 'https://github.com/robustest/documentation'
    }
}

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = [
    'sphinx_tabs.tabs',           # For tabs directive
    'sphinx_design',              # For grid, cards (not tabs)
    'sphinx.ext.autosectionlabel', # Auto-generate section labels
    'sphinx.ext.intersphinx',     # Link to external docs
    'sphinx.ext.viewcode',        # Source code links
    'sphinx.ext.todo',            # Todo items support
]

templates_path = ['_templates']
exclude_patterns = []



# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = 'sphinx_rtd_theme'
html_static_path = ['_static']

# Custom CSS files for mobile responsiveness and search optimization
html_css_files = [
    'navigation-visual-fix.css',
    'mycustom.css',
    'theme_overrides.css',
    'responsive-grids.css',
    'search-optimization.css',
    'interactive-elements.css',
    'version-info.css',
    'feedback-system.css'
]

# JavaScript files for interactive functionality
html_js_files = [
    'navigation-complete-override.js',
    'interactive-elements.js',
    'version-info.js',
    'feedback-system.js'
]

# Theme options
html_theme_options = {
    'navigation_depth': 4,
    'collapse_navigation': False,
    'sticky_navigation': True,
    'includehidden': True,
    'titles_only': False
}

# Auto-section label options
autosectionlabel_prefix_document = True

# Search optimization
html_search_options = {
    'type': 'default'
}

# Enhanced search index
html_use_index = True
html_split_index = False

# Meta tags for search engines
html_meta = {
    'description': 'Comprehensive RobusTest documentation for mobile app testing, automation, and quality assurance',
    'keywords': 'RobusTest, mobile testing, app testing, automation, quality assurance, testing platform',
    'author': 'RobusTest',
    'robots': 'index, follow'
}

# Search language
html_search_language = 'en'
