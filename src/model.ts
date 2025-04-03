import type {
    ProgressCallback,
    TextClassificationPipeline,
} from "@huggingface/transformers";

// NOTE: Replace this with your own task and model
const MODEL = "Xenova/distilbert-base-uncased-finetuned-sst-2-english";
let instance: Promise<TextClassificationPipeline> | null = null;

async function getInstance(
    progress_callback: ProgressCallback | null = null
): Promise<TextClassificationPipeline> {
    if (instance === null) {
        // Dynamically import the Transformers.js library
        const { pipeline, env } = await import("@huggingface/transformers");

        // NOTE: Uncomment this to change the cache directory
        // env.cacheDir = './.cache';

        instance = pipeline("text-classification", MODEL, {
            progress_callback,
        });
    }

    return instance;
}

// The run function is used by the `transformers:run` event handler.
async function run(text: string) {
    const classifier = await getInstance();
    return await classifier(text);
}

export { run };
