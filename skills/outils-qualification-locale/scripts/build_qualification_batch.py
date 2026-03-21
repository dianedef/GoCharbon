#!/usr/bin/env python3
"""
Build a prioritized batch of GoCharbon tool pages for manual or AI-assisted review.
"""

from __future__ import annotations

import argparse
import json
import sys

ROOT = "/home/claude/GoCharbon"
sys.path.insert(0, f"{ROOT}/scripts")

from outils_qualification_common import collect_rows  # noqa: E402


def render_markdown(rows: list[dict]) -> str:
    lines = ["# Batch qualification", ""]
    for row in rows:
        lines.append(f"- `{row['path']}`")
        lines.append(f"  title: {row['title']}")
        lines.append(f"  lane: {row['lane']}")
        lines.append(f"  status: {row['status']}")
        lines.append(f"  priorite: {row['priority_tier']} ({row['priority_score']})")
        lines.append(f"  tags: {', '.join(row['tags']) if row['tags'] else '-'}")
        lines.append(f"  champs remplis: {row['qualification_fields_filled']}")
    return "\n".join(lines)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--limit", type=int, default=25)
    parser.add_argument("--contains", type=str, default=None)
    parser.add_argument("--lane", type=str, default=None)
    parser.add_argument("--status", choices=["all", "todo", "partial", "blocked", "done"], default="todo")
    parser.add_argument("--priority", choices=["P1", "P2", "P3"], default=None)
    parser.add_argument("--format", choices=["paths", "json", "markdown"], default="paths")
    args = parser.parse_args()

    rows = collect_rows()
    if args.contains:
        rows = [row for row in rows if args.contains in row["path"]]
    if args.lane:
        rows = [row for row in rows if row["lane"] == args.lane]
    if args.status != "all":
        rows = [row for row in rows if row["status"] == args.status]
    if args.priority:
        tiers = {"P1": {"P1"}, "P2": {"P1", "P2"}, "P3": {"P1", "P2", "P3"}}
        rows = [row for row in rows if row["priority_tier"] in tiers[args.priority]]
    rows = rows[: args.limit]

    if args.format == "json":
        print(json.dumps(rows, ensure_ascii=False, indent=2))
        return

    if args.format == "markdown":
        print(render_markdown(rows))
        return

    for row in rows:
        print(row["path"])


if __name__ == "__main__":
    main()
