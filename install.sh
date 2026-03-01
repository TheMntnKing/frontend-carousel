#!/bin/bash
set -e

REPO="https://raw.githubusercontent.com/TheMntnKing/frontend-carousel/main"

if [ "$1" = "--global" ]; then
  SKILL_DIR="$HOME/.claude/skills/frontend-carousel"
else
  SKILL_DIR=".claude/skills/frontend-carousel"
fi

echo "Installing frontend-carousel skill..."

mkdir -p "$SKILL_DIR/scripts" "$SKILL_DIR/reference"

curl -sSL "$REPO/SKILL.md" -o "$SKILL_DIR/SKILL.md"
curl -sSL "$REPO/scripts/render.mjs" -o "$SKILL_DIR/scripts/render.mjs"
curl -sSL "$REPO/reference/STYLE_PRESETS.md" -o "$SKILL_DIR/reference/STYLE_PRESETS.md"
curl -sSL "$REPO/reference/html-template.md" -o "$SKILL_DIR/reference/html-template.md"
curl -sSL "$REPO/reference/best-practices.md" -o "$SKILL_DIR/reference/best-practices.md"

echo ""
echo "  Installed to $SKILL_DIR"
echo "  Restart Claude Code, then type /frontend-carousel to get started."
echo ""
echo "  Playwright will be installed automatically on first render."
if [ "$1" != "--global" ]; then
  echo "  Use --global to install to ~/.claude/skills/ instead."
fi
