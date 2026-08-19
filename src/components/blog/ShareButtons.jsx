"use client";

import { useEffect, useState } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { Link2, ShareIcon,Share2Icon } from "lucide-react";


const ShareButtons = () => {
  const [pageUrl, setPageUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setPageUrl(window.location.href);
  }, []);

  const copyLink = async () => {
    if (!pageUrl) return;

    try {
      await navigator.clipboard.writeText(pageUrl);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy link:", error);
    }
  };

  const facebookUrl = pageUrl
    ? `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        pageUrl
      )}`
    : "#";

  const linkedinUrl = pageUrl
    ? `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        pageUrl
      )}`
    : "#";

  return (
    <section className="mt-16  p-6 ">
      <div className="flex flex-wrap items-center justify-between gap-6">
        {/* Heading */}
        <div className="flex items-center gap-3">
          <Share2Icon
            size={22}
            aria-hidden="true"
          />

          {/* <h3 className="text-xl font-semibold">
            Share this article
          </h3> */}
        </div>

        {/* Share Buttons */}
        <div className="flex gap-3">
          {/* Facebook */}
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on Facebook"
            className="rounded-full border p-3 transition hover:bg-blue-600 hover:text-white"
          >
            <FaFacebookF
              size={18}
              aria-hidden="true"
            />
          </a>

          {/* LinkedIn */}
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on LinkedIn"
            className="rounded-full border p-3 transition hover:bg-blue-600 hover:text-white"
          >
            <FaLinkedinIn
              size={18}
              aria-hidden="true"
            />
          </a>

          {/* Copy Link */}
          <button
            type="button"
            onClick={copyLink}
            aria-label="Copy article link"
            className="rounded-full border p-3 transition hover:bg-blue-600 hover:text-white"
          >
            <Link2
              size={18}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      {/* Copy Feedback */}
      {copied && (
        <p
          className="mt-4 text-sm font-medium text-green-600"
          role="status"
        >
          Link copied successfully.
        </p>
      )}
    </section>
  );
};

export default ShareButtons;