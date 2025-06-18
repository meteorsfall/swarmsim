

export function formatDuration(seconds) {
    if (seconds < 0){
        return;
    }
    const s = Math.floor(seconds % 60);
    const m = Math.floor((seconds / 60) % 60);
    const h = Math.floor((seconds / 3600) % 24);
    const d = Math.floor((seconds / 86400) % 365);
    const y = Math.floor(seconds / (86400 * 365));

    // Big number suffixes
    const bigNames = [
        [1e15, "quadrillion"],
        [1e12, "trillion"],
        [1e9, "billion"],
        [1e6, "million"],
        [1e3, "thousand"]
    ];

    if (y >= 1e6) {
        for (const [value, name] of bigNames) {
            if (y >= value) return `${(y / value).toFixed(0)} ${name} years`;
        }
    }

    if (y >= 2) return `${y} years`;
    if (y === 1) return d > 0 ? `1 year ${d} days` : `1 year`;
    if (d >= 2) return `${d} days${h > 0 ? ` ${h} hours` : ""}`;
    if (h >= 1) return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
        return `${m}:${String(s).padStart(2, "0")}`;
}


