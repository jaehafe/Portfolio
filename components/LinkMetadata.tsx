"use client";

import { cn } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";
import { BarLoader } from "react-spinners";

interface Props {
  link: string;
  className?: string;
}

export default function LinkMetadata({ link, className }: Props) {
  const { data, isLoading } = useQuery({
    queryKey: ["link-metadata", link],
    queryFn: async () => {
      const res = await fetch("/api/generateMetadata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(link),
      });

      const data = await res.json();

      if (data) {
        return data;
      } else {
        return null;
      }
    },
    enabled: !!link,
  });

  console.log(data);

  return data?.ogImage && data.ogDescription ? (
    <a
      href={link}
      target="_blank"
      className={cn(
        "mb-2 flex flex-col items-center gap-3 overflow-hidden rounded-lg border border-border duration-100 hover:bg-box md:flex-row",
        className
      )}
      rel="noreferrer"
    >
      {data.ogImage && (
        <Image
          src={data.ogImage[0].url}
          width={600}
          height={300}
          alt=""
          className="w-full md:w-48"
        />
      )}
      <p className="flex flex-col max-md:px-3 max-md:pb-3">
        <p className="line-clamp-1">{data.ogTitle}</p>
        <small className="line-clamp-2 text-xs text-muted">
          {data.ogDescription}
        </small>
        <p className="mt-2 flex items-center gap-1">
          {data.favicon && data.favicon !== "/favicon.ico" && (
            <Image src={data.favicon} width={15} height={15} alt="" />
          )}
          {data.ogSiteName && (
            <small className="text-muted">{data.ogSiteName}</small>
          )}
        </p>
      </p>
    </a>
  ) : (
    <a href={link} className="flex w-full items-center justify-between gap-4">
      {link}
      {isLoading && (
        <div className="hidden md:block">
          <BarLoader color="white" />
          <small className="inline-block text-xs text-muted">
            Generating Metadata for this link
          </small>
        </div>
      )}
    </a>
  );
}
