  async chat(messages: ChatMessage[], parentEvent?: Event, streaming?: boolean): Promise<ChatResponse> {
    // Implement chat method
    throw new Error("Method not implemented.");
  }

  async complete(prompt: string, parentEvent?: Event, streaming?: boolean): Promise<ChatResponse> {
    // Implement complete method
    throw new Error("Method not implemented.");
  }

  tokens(messages: ChatMessage[]): number {
    // Implement tokens method
    throw new Error("Method not implemented.");
  }
    this.model = null;
  }

  async loadModel(modelPath: string): Promise<void> {
    // Load the Ollama model from the specified path
    const fs = require('fs');
    this.model = JSON.parse(fs.readFileSync(modelPath, 'utf8'));
  }

  async predict(input: any): Promise<any> {
    // Use the loaded Ollama model to make a prediction based on the provided input
    const prediction = this.model.predict(input);
    return prediction;
  }
  private model: any;
  hasStreaming: boolean = false;
  metadata: LLMMetadata = {
    model: 'ollama',
    temperature: 0.1,
    topP: 1,
    maxTokens: 1000,
    contextWindow: 1000,
    tokenizer: undefined
  };

  constructor() {
    this.model = null;
  }

// Removed duplicate class definition
    throw new Error("Method not implemented.");
  }

  async complete(prompt: string, parentEvent?: Event, streaming?: boolean): Promise<ChatResponse> {
    // Implement complete method
    throw new Error("Method not implemented.");
  }

// No changes needed