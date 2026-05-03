import type { Metadata } from 'next';
import { getBlogListMetadata } from '@/lib/metadata';
import type { Locale } from '@/i18n';
import BlogListSection from '@/components/sections/BlogListSection';
import { setRequestLocale } from 'next-intl/server';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  return getBlogListMetadata(locale as Locale);
}

export default function BlogPage({ params: { locale } }: Props) {
  setRequestLocale(locale as Locale);
  return <BlogListSection />;
}
