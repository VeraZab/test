import gulp     from 'gulp';
import path     from 'path';
import rename   from 'gulp-rename';
import template from 'gulp-template';
import yargs    from 'yargs';
import toSlugCase from 'to-slug-case';

let root = '.';

let resolveToComponents = (glob = '') => {
    return path.join(root, '_generated', glob); // app/components/{glob}
};

// map of all paths
let paths = {
    js: resolveToComponents('**/*!(.spec.js).js'), // exclude spec files
    output: root,
    blankComponents: path.join(__dirname, 'generator', 'component/**/*.**'),
    dest: path.join(__dirname, 'dist')
};


/**
 *
 * Custom generators
 *
 */
gulp.task('component', () => {
    const cap = (val) => {
        return val.charAt(0).toUpperCase() + val.slice(1);
    };
    const name = yargs.argv.name;
    const nameSlug = toSlugCase(name);
    const parentPath = yargs.argv.parent || '';
    const destPath = path.join(resolveToComponents(), parentPath, name);

    return gulp.src(paths.blankComponents)
        .pipe(template({
            name: name,
            nameSlug: nameSlug,
            upCaseName: cap(name)
        }))
        .pipe(rename((path) => {
            path.basename = path.basename.replace('temp', name);
        }))
        .pipe(gulp.dest(destPath));
});
