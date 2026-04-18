'use client';

import { useEffect, useRef, useCallback, useMemo } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Highlight from '@tiptap/extension-highlight';
import { TextStyle } from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Strikethrough,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
  Link2,
  ImageIcon,
  Minus,
  Undo2,
  Redo2,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Highlighter,
  RemoveFormatting,
} from 'lucide-react';

interface RichBlogEditorProps {
  content: string;
  onChange: (html: string) => void;
  onImageUpload?: (file: File) => Promise<string>;
  placeholder?: string;
}

interface ToolbarButtonProps {
  onClick: () => void;
  isActive?: boolean;
  disabled?: boolean;
  title: string;
  children: React.ReactNode;
}

function ToolbarButton({
  onClick,
  isActive = false,
  disabled = false,
  title,
  children,
}: ToolbarButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      title={title}
      aria-label={title}
      aria-pressed={isActive}
      className={`min-w-11 min-h-11 inline-flex items-center justify-center rounded-md transition-colors disabled:opacity-40 disabled:cursor-not-allowed ${
        isActive
          ? 'bg-accent text-foreground'
          : 'text-muted-foreground hover:bg-muted hover:text-foreground'
      }`}
    >
      {children}
    </button>
  );
}

function ToolbarDivider() {
  return <div className="w-px h-6 bg-border mx-1 self-center" />;
}

function stripHtmlTags(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ');
}

function countWords(text: string): number {
  const stripped = stripHtmlTags(text).trim();
  if (stripped.length === 0) return 0;
  return stripped.split(/\s+/).length;
}

function countCharacters(text: string): number {
  return stripHtmlTags(text).length;
}

function countImages(html: string): number {
  const matches = html.match(/<img\s/g);
  return matches ? matches.length : 0;
}

export function RichBlogEditor({
  content,
  onChange,
  onImageUpload,
  placeholder,
}: RichBlogEditorProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3] },
      }),
      Image.configure({ inline: false, allowBase64: false }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: { class: 'text-primary underline' },
      }),
      Placeholder.configure({
        placeholder: placeholder ?? 'Start writing your blog post...',
      }),
      Underline,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Highlight,
      TextStyle,
      Color,
    ],
    content,
    onUpdate: ({ editor: ed }) => {
      onChange(ed.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          'prose prose-gray max-w-none min-h-[500px] p-6 focus:outline-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:leading-7 prose-a:text-primary prose-a:underline prose-img:rounded-lg prose-img:shadow-md prose-img:mx-auto',
      },
      handleDrop: (view, event, _slice, moved) => {
        if (
          !moved &&
          event.dataTransfer &&
          event.dataTransfer.files &&
          event.dataTransfer.files.length > 0
        ) {
          const file = event.dataTransfer.files[0];
          if (file.type.startsWith('image/') && onImageUpload) {
            event.preventDefault();
            onImageUpload(file).then((url) => {
              const { schema } = view.state;
              const node = schema.nodes.image.create({ src: url });
              const transaction = view.state.tr.replaceSelectionWith(node);
              view.dispatch(transaction);
            });
            return true;
          }
        }
        return false;
      },
      handlePaste: (view, event) => {
        const items = event.clipboardData?.items;
        if (!items || !onImageUpload) return false;

        for (let i = 0; i < items.length; i++) {
          const item = items[i];
          if (item.type.startsWith('image/')) {
            const file = item.getAsFile();
            if (file) {
              event.preventDefault();
              onImageUpload(file).then((url) => {
                const { schema } = view.state;
                const node = schema.nodes.image.create({ src: url });
                const transaction = view.state.tr.replaceSelectionWith(node);
                view.dispatch(transaction);
              });
              return true;
            }
          }
        }
        return false;
      },
    },
  });

  // Sync content from outside (e.g. after AI generation)
  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  const handleImageButtonClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleFileChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file || !editor || !onImageUpload) return;

      try {
        const url = await onImageUpload(file);
        editor.chain().focus().setImage({ src: url }).run();
      } catch (err: unknown) {
        const message =
          err instanceof Error ? err.message : 'Image upload failed';
        // eslint-disable-next-line no-alert
        alert(message);
      }

      // Reset the input so the same file can be selected again
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    },
    [editor, onImageUpload]
  );

  const handleLinkClick = useCallback(() => {
    if (!editor) return;

    const previousUrl = editor.getAttributes('link').href ?? '';
    // eslint-disable-next-line no-alert
    const url = window.prompt('Enter URL:', previousUrl);

    if (url === null) return; // Cancelled

    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }

    editor
      .chain()
      .focus()
      .extendMarkRange('link')
      .setLink({ href: url })
      .run();
  }, [editor]);

  const currentHtml = editor?.getHTML() ?? '';
  const stats = useMemo(() => {
    const words = countWords(currentHtml);
    const characters = countCharacters(currentHtml);
    const images = countImages(currentHtml);
    const recommendedImages = Math.max(1, Math.floor(words / 500));
    return { words, characters, images, recommendedImages };
  }, [currentHtml]);

  if (!editor) {
    return (
      <div className="border border-border rounded-lg bg-card">
        <div className="h-[500px] flex items-center justify-center text-muted-foreground">
          Loading editor...
        </div>
      </div>
    );
  }

  return (
    <div className="border border-border rounded-lg bg-card overflow-hidden">
      {/* Hidden file input for image uploads */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Toolbar */}
      <div className="sticky top-0 z-10 bg-muted border-b border-border">
        {/* Row 1 */}
        <div className="flex flex-wrap items-center gap-0.5 px-2 py-1.5 border-b border-border">
          {/* Text formatting */}
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleBold().run()}
            isActive={editor.isActive('bold')}
            title="Bold (Ctrl+B)"
          >
            <Bold className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleItalic().run()}
            isActive={editor.isActive('italic')}
            title="Italic (Ctrl+I)"
          >
            <Italic className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            isActive={editor.isActive('underline')}
            title="Underline (Ctrl+U)"
          >
            <UnderlineIcon className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleStrike().run()}
            isActive={editor.isActive('strike')}
            title="Strikethrough"
          >
            <Strikethrough className="h-4 w-4" />
          </ToolbarButton>

          <ToolbarDivider />

          {/* Headings */}
          <ToolbarButton
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            isActive={editor.isActive('heading', { level: 2 })}
            title="Heading 2"
          >
            <Heading2 className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
            isActive={editor.isActive('heading', { level: 3 })}
            title="Heading 3"
          >
            <Heading3 className="h-4 w-4" />
          </ToolbarButton>

          <ToolbarDivider />

          {/* Lists */}
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            isActive={editor.isActive('bulletList')}
            title="Bullet List"
          >
            <List className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            isActive={editor.isActive('orderedList')}
            title="Ordered List"
          >
            <ListOrdered className="h-4 w-4" />
          </ToolbarButton>

          <ToolbarDivider />

          {/* Blockquote */}
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            isActive={editor.isActive('blockquote')}
            title="Blockquote"
          >
            <Quote className="h-4 w-4" />
          </ToolbarButton>

          <ToolbarDivider />

          {/* Link & Image */}
          <ToolbarButton
            onClick={handleLinkClick}
            isActive={editor.isActive('link')}
            title="Insert Link"
          >
            <Link2 className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton
            onClick={handleImageButtonClick}
            disabled={!onImageUpload}
            title="Insert Image"
          >
            <ImageIcon className="h-4 w-4" />
          </ToolbarButton>

          <ToolbarDivider />

          {/* Horizontal rule */}
          <ToolbarButton
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
            title="Horizontal Rule"
          >
            <Minus className="h-4 w-4" />
          </ToolbarButton>

          <ToolbarDivider />

          {/* Undo / Redo */}
          <ToolbarButton
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().undo()}
            title="Undo (Ctrl+Z)"
          >
            <Undo2 className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().redo()}
            title="Redo (Ctrl+Shift+Z)"
          >
            <Redo2 className="h-4 w-4" />
          </ToolbarButton>
        </div>

        {/* Row 2 */}
        <div className="flex flex-wrap items-center gap-0.5 px-2 py-1.5">
          {/* Text alignment */}
          <ToolbarButton
            onClick={() => editor.chain().focus().setTextAlign('left').run()}
            isActive={editor.isActive({ textAlign: 'left' })}
            title="Align Left"
          >
            <AlignLeft className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().setTextAlign('center').run()}
            isActive={editor.isActive({ textAlign: 'center' })}
            title="Align Center"
          >
            <AlignCenter className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().setTextAlign('right').run()}
            isActive={editor.isActive({ textAlign: 'right' })}
            title="Align Right"
          >
            <AlignRight className="h-4 w-4" />
          </ToolbarButton>

          <ToolbarDivider />

          {/* Highlight */}
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleHighlight().run()}
            isActive={editor.isActive('highlight')}
            title="Highlight"
          >
            <Highlighter className="h-4 w-4" />
          </ToolbarButton>

          <ToolbarDivider />

          {/* Clear formatting */}
          <ToolbarButton
            onClick={() =>
              editor.chain().focus().clearNodes().unsetAllMarks().run()
            }
            title="Clear Formatting"
          >
            <RemoveFormatting className="h-4 w-4" />
          </ToolbarButton>
        </div>
      </div>

      {/* Editor content */}
      <EditorContent editor={editor} />

      {/* Bottom bar */}
      <div className="flex flex-wrap items-center gap-4 px-4 py-2.5 border-t border-border bg-muted text-xs text-muted-foreground">
        <span>{stats.words.toLocaleString()} words</span>
        <span>{stats.characters.toLocaleString()} characters</span>
        <span>
          {stats.images} {stats.images === 1 ? 'image' : 'images'} /{' '}
          {stats.recommendedImages} recommended
        </span>
      </div>
    </div>
  );
}
