export const getCourseSlug = (pathname: string) => {
    // example url:
    // course/build-shadcn-ui-from-scratch/project-setup/create-monorepo-with-turbo/create-monorepo/challenge
    // course/courseSlug/chapterSlug/lessonSlug/stepSlug
    let pathnameAsArray = pathname.split("/");
    return pathnameAsArray[2];
  };